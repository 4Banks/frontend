import React from 'react';
import AboutUsProfile from '../../components/AboutUsProfile';
import fabio_huang from "../../assets/fabio_huang.jpeg";
import joao_vareiro from "../../assets/joao_vareiro.JPG";
import lourdes_oshiro from "../../assets/lourdes_oshiro.jpg";
import tiago_santi from "../../assets/tiago_santi.JPEG";
import mateus_mello from "../../assets/mateus_mello.jpg";
import "../../styles/global.css";
import  "../../styles/about-us.css";

function AboutUs() {
  return (
    <div>
      <div className="about_us">
        <div className="about_us_intro">
        <h1>Quem somos</h1>
        <p className="about_us_intro_text">Conheça a equipe de desenvolvimento do 4banks.</p>
        </div>
        <AboutUsProfile
          name="Fabio Huang"
          description="Aluno do segundo ano de engenharia de computação na UFMS. Bolsista no Laboratório de Inteligência Artificial da universidade, implementando processamento de imagens para classificação com modelos de atenção. Almeja seguir carreira na área de IA."
          url_photo={fabio_huang}
          link_linkedin="https://www.linkedin.com/in/f%C3%A1bio-huang-0aa05b257/"
          link_github="https://github.com/FabioHuang"
        />
        <AboutUsProfile
          name="João Pedro Vareiro"
          description={`João Vareiro tem 20 anos e é estudante de Engenharia de Software na Universidade Federal de Mato Grosso do Sul, com Média Geral Acadêmica de 8,93/10. Seu principal interesse na área de TI é a Inteligência Artificial.
          
          Atualmente trabalha no Laboratório de Inteligência Artificial da UFMS, atuando na gestão de projetos e no desenvolvimento de modelos de visão computacional focados na detecção e classificação da fauna e flora da mata atlântica. Além disso, contribui no desenvolvimento do back-end e realiza integração contínua e entrega contínua nos sistemas de avaliação e inscrição da Feira de Tecnologias, Engenharias e Ciências de Mato Grosso do Sul.

No projeto 4banks, desenvolveu o front-end e atuou no desenvolvimento do protótipo e na descoberta do produto.

Dentre suas experiências concluídas, trabalhou como trainee full-stack na SENAI Soluções Digitais, adquirindo conhecimentos em Java EE, Docker e Scrum. Também atuou como desenvolvedor front-end na Mega Júnior, onde desenvolveu aplicações em Vue.js. Além disso, foi membro da diretoria de Recursos Humanos, o que lhe proporcionou o desenvolvimento de habilidades interpessoais para resolver problemas entre os membros da empresa júnior, contribuindo para uma maior integração na equipe.
`}

          url_photo={joao_vareiro}
          link_linkedin="https://www.linkedin.com/in/joaovareiro/"
          link_github="https://github.com/joaovareiro"
        />
        <AboutUsProfile
          name="Lourdes Oshiro Igarashi"
          description={`Lourdes Oshiro Igarashi tem 22 anos e é graduanda de Engenharia de Software na Universidade Federal de Mato Grosso do Sul. 
                          
                          É apaixonada pelas diversas facetas do desenvolvimento de software, em especial a descoberta e validação do produto, prototipação, engenharia de requisitos, gerenciamento de projetos e de software. Gosta de atuar em frentes criativas, planejar, organizar e encontrar soluções inovadoras em projetos de tecnologia.
                          
                          No projeto 4banks, atuou na configuração do software, product owner, designer UI/UX e na documentação do projeto. 
                          
                          Já participou de diversos programas acadêmicos, como o PET Sistemas do Ministério da Educação, Elas programando, UNAPI (Universidade Aberta à Pessoa Idosa); e já atuou como representante discente do colegiado de Engenharia de Software; faz parte do LEDES (Laboratório de Desenvolvimento de Software) e do programa internacional de líderes Cargill Global Scholars.
                          É muito proativa, comunicativa, ambiciosa, determinada e quer realizar grandes feitos no mercado de computação, aliado a pesquisa e instituições de ensino.
                          `}
          url_photo={lourdes_oshiro}
          link_linkedin="https://www.linkedin.com/in/lourdes-oshiro-igarashi/"
          link_github="https://github.com/LourdesOshiroIgarashi"
        />
        <AboutUsProfile
          name="Tiago Santi"
          description={`Com 22 anos de idade, Tiago Clarintino Santi é um aluno de Engenharia de Software na Universidade Federal de Mato Grosso do Sul, entusiasta de Inteligência Artificial.
          
          Nos últimos anos, dedicou-se à exploração de Visão Computacional e Processamento de Linguagem Natural, empregando essas habilidades na solução de problemas complexos por meio do desenvolvimento de software. Como parte integrante do Laboratório de Inteligência Artificial da UFMS, contribuiu para a pesquisa em Deep Learning durante seu período de iniciação científica. 
          
          No projeto 4banks, desempenhou os papéis de desenvolvedor backend, analista de dados e DevOps. Aliado à habilidade de comunicação, experiência em trabalho colaborativo e um forte desejo de crescimento, está determinado a aprimorar suas habilidades no campo do desenvolvimento de software, tanto na esfera acadêmica quanto no mercado.`}
          url_photo={tiago_santi}
          link_linkedin="https://www.linkedin.com/in/tiago-santi/"
          link_github="https://github.com/TiagoSanti"
        />
        <AboutUsProfile
          name="Mentor - Mateus Mello"
          description={`Desenvolvedor de software há mais de 10 anos, formado pela UFSC em Sistemas de Informação. Atua na Neoway também como desenvolvedor de software no time de Plataforma de Dados responsável por toda ingestão dos dados na plataforma.
          
          Acredita a tecnologia permite tornar as vidas das pessoas melhor e as empresas alcançarem novos patameres nos seus negócio.`}
          url_photo={mateus_mello}
          link_linkedin="https://www.linkedin.com/in/mateuspmello/"
          link_github="https://github.com/mateuspmello"
        />
      </div>
    </div>
  );
}

export default AboutUs;
