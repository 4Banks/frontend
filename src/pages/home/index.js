import React from 'react';
import { Link } from "react-router-dom";
import finance_home from '../../assets/finance_home.jpg';
import "../../styles/global.css";
import "../../styles/home.css";
import ScatterPlot from '../../components/ScatterPlot';
import BarChart from '../../components/BarChart';


function Home() {

  const xData = [1, 30, 5, 70, 9]; 
  const yData = [2, 44, 6, 68, 14]; 


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
        <ScatterPlot
        title="Gráfico de dispersão (Scatter Plot)"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus nec urna accumsan mollis. Ut pretium, lorem vitae interdum hendrerit, quam purus fermentum dolor, in ultrices nisl ipsum sed nunc. Curabitur ornare quam enim, sit amet finibus lacus efficitur ac. Etiam semper bibendum velit at pharetra. Fusce accumsan sed elit sit amet facilisis. Vestibulum dictum tempus interdum. Donec in placerat eros, ultrices consequat justo. Sed in condimentum libero."
        x={xData}
        y={yData}
      />
      <BarChart
        title = "Gráfico de barras (Bar Chart)"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus nec urna accumsan mollis. Ut pretium, lorem vitae interdum hendrerit, quam purus fermentum dolor, in ultrices nisl ipsum sed nunc. Curabitur ornare quam enim, sit amet finibus lacus efficitur ac. Etiam semper bibendum velit at pharetra. Fusce accumsan sed elit sit amet facilisis. Vestibulum dictum tempus interdum. Donec in placerat eros, ultrices consequat justo. Sed in condimentum libero."
        x = {['Categoria A', 'Categoria B', 'Categoria C']}
          y = {[10, 20, 5]}
      />

      </div>
    </div>
  );
}

export default Home;
