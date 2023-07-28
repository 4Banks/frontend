import React from 'react';
import { Link } from "react-router-dom";
import finance_home from '../../assets/finance_home.jpg';
import "../../styles/global.css";
import "../../styles/home.css";


function Home() {

  return (
    <div>
      <div className="home">
      <div className="home_intro">
        <div className="home_intro_info">
        <h1 className="title_home">4banks</h1>
        <p className='home_intro_info_text'>Descubra um mundo de possibilidades com o 4banks, nossa plataforma de análise de dados voltada para cientistas de dados do time de análise e detecção de fraudes em instituições financeiras. Com nossas ferramentas, você poderá explorar seus dados de transações bancárias de cartão de crédito e obter análises detalhadas, desde insights de alto nível até informações específicas. Nossa metodologia avançada facilita a tomada de decisões estratégicas, permitindo que você identifique padrões suspeitos e detecte atividades fraudulentas com precisão. Experimente agora e transforme seus dados em insights valiosos para proteger seus clientes e impulsionar a segurança financeira da sua instituição.</p>
        <Link to="/analise" className='home_intro_info_button'>
              Nova análise
            </Link>
        </div>
        <div className="home_intro_info_image_container">
        <img src={finance_home} alt="finance_home" className='home_intro_info_image'/>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
