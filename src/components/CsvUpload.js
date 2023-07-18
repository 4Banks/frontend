import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LinearProgress } from '@mui/material';
import '../styles/global.css';
import '../styles/csv-upload.css';
import send from '../assets/send.svg';

const CsvUpload = () => {

  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      setFile(null);
      setUploadProgress(0);
      toast.info('Nenhum arquivo selecionado.');
      return;
    }

    const maxSize = 200 * 1024 * 1024;
    if (selectedFile.size > maxSize) {
      toast.error(
        'O arquivo selecionado é maior que 200MB. Por favor, escolha um arquivo menor.'
      );
      setFile(null);
      setUploadProgress(0); 
      return;
    }

    setFile(selectedFile);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error('Por favor, escolha um arquivo.');
      return;
    }

    const fileId = uuidv4();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('id', fileId);

    const OBJECT_NAME = fileId;
    const BUCKET_NAME = 'banks-dev-392615.appspot.com';
    const REFRESH_TOKEN = process.env.REACT_APP_REFRESH_TOKEN;
    const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
    const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

    try {
      const response = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: REFRESH_TOKEN,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET, 
        }),
      });

      const data = await response.json();
      const OAUTH2_TOKEN = data.access_token;

      const xhr = new XMLHttpRequest();

      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const progressPercent = (event.loaded / event.total) * 100;
          setUploadProgress(progressPercent);
        }
      });

      xhr.open(
        'POST',
        `https://storage.googleapis.com/upload/storage/v1/b/${BUCKET_NAME}/o?uploadType=media&name=${OBJECT_NAME}`
      );
      xhr.setRequestHeader('Authorization', `Bearer ${OAUTH2_TOKEN}`);
      xhr.setRequestHeader('Content-Type', 'text/csv');

      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          console.log('Arquivo enviado com sucesso!');
          toast.success('Arquivo enviado com sucesso!');
        } else {
          console.error('Falha ao enviar arquivo.');
          toast.error('Falha ao enviar arquivo.');
        }
      });

      xhr.send(file);
    } catch (error) {
      console.error(error);
      toast.error('Ocorreu um erro no envio do arquivo');
    }
  };

  return (
    <div className="home_csv_upload">
      <div className="home_csv_upload_buttons">
        <label htmlFor="home_csv_upload_input" className="home_csv_choose_button">
          Escolher arquivo
        </label>
        <input
          id="home_csv_upload_input"
          className="home_csv_upload_hidden"
          type="file"
          accept=".csv"
          onChange={handleFileChange}
        />
        <button
          className="home_csv_send_button"
          onClick={handleUpload}
        >
          Enviar arquivo
          <img src={send} alt="send" className="home_csv_send_button_image" />
        </button>
      </div>
      {file && (
        <div className="home_file_name_display">
          <span>{file.name}</span>
        </div>
      )}
      {uploadProgress > 0 && (
        <LinearProgress variant="determinate" value={uploadProgress} className='home_progress_bar'/>
      )}
      <p className="home_csv_upload_limit">Limite: 200 Mb</p>
    </div>
  );
};

export default CsvUpload;