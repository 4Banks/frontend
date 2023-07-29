import React from 'react';
import '../../styles/documentation.css';
import DocumentationDescription from '../../components/DocumentationDescription';
import product_vision from '../../assets/product_vision.png';
import '../../styles/documentation.css'
import '../../styles/global.css'
import objetivos from '../../assets/objetivos.jpeg'
import kanban from '../../assets/kanban.png'

function Documentation() {
  return (
    <div className='documentation'>
      <div className="documentation_intro">
        <h1 className='documentation_intro_title'>Documentação</h1>
        <p className='documentation_intro_text'>Saiba mais sobre as técnicas e ferramentas utilizadas para a criação desse produto e os artefatos gerados no processo do desenvolvimento do software.</p>
        <p className='documentation_product_discovery_title'>Descoberta do produto</p>
        <p className='documentation_product_discovery_description'>{`A metodologia utilizada para descoberta do produto 4banks foi a Lean Inception Relâmpago, etapa crucial para compreender e explorar as necessidades dos usuários, o contexto do problema e as oportunidades de mercado antes de iniciar a fase de desenvolvimento propriamente dita.
          Neste processo, realizamos 2 sessões de 3 horas para discutir, gerar e definir a visão do produto, os objetivos do projeto, as personas e o feature mapping, com todos os membros da nossa equipe, no qual buscamos coletar informações valiosas para tomar decisões informadas sobre o que construir e como construir.
          `}</p>
        <p className='documentation_product_discovery_subtitle'>Visão do produto</p>
        <img src={product_vision} alt="Product Vision" />
      </div>

      <div className="documentation_personas">
        <p className='documentation_personas_title'>Personas</p>
        <div className="documentation_personas_container_text">
        <p className='documentation_personas_text'>{`As personas do público-alvo de nosso sistema de software são profissionais da área de ciência de dados, com foco em cientistas de dados, mas também abrange analistas de dados e engenheiros de inteligência artificial.
        Ao entender as características, necessidades e objetivos dessas personas, direcionamos os nossos esforços de desenvolvimento para atender às demandas variadas desse público diversificado. A plataforma intuitiva e acessível que construímos visa acomodar tanto profissionais juniores quanto experientes, oferecendo recursos avançados de análise de dados e inteligência artificial. 
        `}</p>
        <ul className='documentation_personas_list'>
          <li>Manipulação de Dados e Análise</li>
          <li>Modelagem Preditiva e Inteligência Artificial</li>
          <li>Otimização do Trabalho e Insights Valiosos</li>
          <li>Colaboração e Compartilhamento</li>
          <li>Usabilidade e Aprimoramento de Habilidades</li>
        </ul>
        <p className='documentation_personas_text'>Com isso, buscamos criar uma solução abrangente e satisfatória para os cientistas de dados, considerando seus objetivos e necessidades, se tornando uma ferramenta indispensável para os profissionais da área, permitindo que eles explorem todo o potencial dos dados e impulsionem suas atividades de análise e tomada de decisões.
        </p>
        <p className='documentation_personas_text'>
        A usabilidade intuitiva e o suporte ao aprimoramento das habilidades em análise de dados garantirão uma experiência satisfatória e promissora para o público-alvo.
        </p>
        </div>
        </div>

      <div className="documentation_objectives">
        <p className='documentation_objectives_title'>Objetivos</p>
        <div className="documentation_objectives_container_text">
        <p className='documentation_objectives_text'>Para construção do produto, foram definidos 4 objetivos maiores, que abrangem o valor que queremos agregar ao usuário final: importar os dados do usuário, tratar os dados fornecidos, analisar os dados e apresentar o resultado obtido.</p>
        <p className='documentation_objectives_text'> Todos os objetivos maiores foram divididos em objetivos menores e, por fim, divididos em atividades a serem realizadas no desenvolvimento do projeto.</p>
        </div>
        <div className="documentation_objectives_image_container">
        <img className="documentation_objectives_image" src={objetivos} alt="Objetivos" />
        </div>
      </div>


      

      <DocumentationDescription
        mainTitle="Configuração de Software"
        mainDescription=""
        leftTitle="Commits semânticos"
        leftDescription={`Para padronização das mensagens de commits, foi definido um guia de estilo para escrever as mensagens de commit no Github. Ele define o formato padrão para as mensagens de commit, que consiste em uma estrutura com tipo, escopo, assunto, corpo e rodapé.
        
        Os tipos de mensagens de commit aceitáveis são pré-definidos, incluindo categorias como "FEAT" para adicionar uma nova funcionalidade, "FIX" para correção de bugs, "DOCS" para documentação, entre outros. Além do uso de escopos para indicar qual parte específica do projeto está sendo modificada, como "PowerBI", "Home", "Relatório", etc.
        
        O assunto deve ser uma descrição breve e clara do que foi feito, escrito em letras minúsculas e sem ponto final. O corpo é opcional e pode ser usado para fornecer mais informações detalhadas sobre as mudanças. O rodapé é também opcional e pode conter informações adicionais, como números de issues relacionadas.
        `}
        rightTitle="Modelo de ramificação"
        rightDescription={`O modelo de ramificação utilizado no projeto é o GitHub Flow. Um modelo de fluxo de trabalho para desenvolvimento de software usando Git e GitHub. As principais características incluem: desenvolvimento em branches separadas para cada funcionalidade ou correção; commits frequentes para manter um histórico detalhado e permitir o acompanhamento das mudanças; uso de Pull Requests para revisão de código e discussão antes da mesclagem na branch principal; e revisões de código por membros da equipe para garantir a qualidade e compartilhar conhecimento.
        
        Este modelo oferece várias vantagens, incluindo simplicidade, colaboração aprimorada e rastreabilidade das alterações. Para utilizá-lo, é necessário criar uma ramificação para cada funcionalidade a partir da branch dev, que é única branch que tem contato com a branch principal, além da hotfix.
        
        Após fazer as alterações e testes necessários, abre-se um Pull Request para revisão e aprovação. Com pelo menos duas aprovações, o Pull Request é mesclado na branch requisitada.
        
        A padronização da nomenclatura das branches ajuda a identificar rapidamente o propósito de cada ramificação e facilita a colaboração e o entendimento do trabalho em andamento. Exemplos de nomenclatura incluem "feature_header" e "bug_correcao_da_validacao_do_tamanho_do_dataset".
        `}
      />
      <DocumentationDescription
        mainTitle="Gerência de Projeto"
        mainDescription={`Para melhor eficiência da execução do projeto, utilizamos a metodologia Kanban e Scrum combinadas e adaptadas para nossa necessidade.
          Criamos 3 colunas de acompanhamento por iteração: To do para próxima reunião, In Progress e Done. Além de uma coluna com as atividades previstas e uma coluna para cada iteração, que nos ajudou a visualizar a progressão e o andamento do projeto completo ao longo do tempo. Ao todo no projeto, tivemos 10 iterações que ocorreram 3x na semana, às segundas, quartas e sextas, em cada iteração todos os membros do time tinham atividades a serem realizadas.`}
        srcImage = {kanban}
      />
    </div>

  );
}

export default Documentation;
