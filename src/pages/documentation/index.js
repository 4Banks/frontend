import React from 'react';
import '../../styles/documentation.css';
import DocumentationDescription from '../../components/DocumentationDescription';
import product_vision from '../../assets/product_vision.png';
import '../../styles/documentation.css'
import '../../styles/global.css'
import objetivos from '../../assets/objetivos.jpeg'
import kanban from '../../assets/kanban.png'
import e_naoe_faz_naofaz from '../../assets/e_naoe_faz_naofaz.jpeg'
import bpmn from '../../assets/bpmn.jpeg'
import market_search from '../../assets/market_search.png'
import pipeline from '../../assets/pipeline.png'
import github_actions from '../../assets/github_actions.png'

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
        <p className='market_search_title' >Pesquisa de Mercado</p>
        <DocumentationDescription
          mainDescription={`Através de um formulário enviado a profissionais na área de ciência de dados, conduzimos uma pesquisa de mercado para entender melhor as necessidades, objetivos e satisfação com as ferramentas atuais. As respostas que recebemos nos forneceram valiosos insights sobre como podemos aprimorar nosso produto para melhor atender às demandas deste público.

Em termos de necessidades principais, a demanda por ferramentas que suportem a construção de pipelines de maneira prática é bastante alta, assim como a necessidade de plataformas low code. Nosso produto se destaca precisamente por satisfazer estas necessidades. Entretanto, identificamos também uma necessidade de aprimorar conhecimentos em programação e estatística multivariada, bem como a demanda por profissionais com proficiência em matemática, o que são áreas que estamos comprometidos a apoiar no futuro.

No que tange aos objetivos principais, os respondentes estão focados em levar a informação até a ponta da operação, gerar insights para processos e obter informações que levem a margens de lucro maiores. Nosso produto está bem alinhado para atender a esses objetivos, graças à sua capacidade de simplificar complexidades e produzir insights valiosos.

Em relação à satisfação com as ferramentas de data science, descobrimos que, em média, os usuários estão satisfeitos com as ferramentas que utilizam, mas reconhecem que há espaço para melhorias. Isso nos motiva a continuar aprimorando nosso produto, buscando sempre entregar a melhor experiência possível aos usuários.

Os usuários valorizam a facilidade de uso, a capacidade de lidar com grandes volumes de dados e a praticidade das ferramentas de ciência de dados. Estes são pontos fortes do nosso produto, que foi desenvolvido com foco na usabilidade, escalabilidade e eficiência.

Identificamos também algumas lacunas nas ferramentas de ciência de dados atuais. Os usuários desejam mais opções nativas de análise preditiva, maior rapidez das ferramentas e mais soluções plug-and-play. Esses são desafios que estamos ansiosos para resolver em nosso roteiro de desenvolvimento de produto.

Por fim, entre as técnicas de análise de dados mais utilizadas, a coleta e limpeza de dados, análise descritiva e preditiva, bem como a classific
ação supervisionada se destacam. Nosso produto já oferece suporte a várias dessas técnicas, e estamos comprometidos a expandir ainda mais nossas funcionalidades.

Em resumo, nossas descobertas de pesquisa de mercado nos permitem entender melhor as necessidades e aspirações dos profissionais de ciência de dados. Estamos empenhados em atender a essas necessidades, preencher lacunas e oferecer uma ferramenta robusta e fácil de usar, que pode realmente impulsionar o sucesso dos nossos usuários na sua jornada de ciência de dados.`}
        />

        <div className="market_search_container">
        <img className="market_search_container_image" src={market_search} alt="" />
        </div>
        <p className='documentation_product_discovery_subtitle'>Visão do produto</p>
        <div className='documentation_product_discovery_container'>
        <p>Para uma análise mais ampla da visão do produto, realizamos uma dinâmica individual em que cada membro da equipe compartilhou sua próprias expectativas de entrega da plataforma baseado nos seguintes campos:</p>
        <br />

        <ul className='documentation_product_discovery_list'>
          <li>Para [cliente final]: o perfil dos clientes finais ou usuários que serão beneficiados pelo seu produto. Quem são eles? Quais são suas necessidades específicas?</li>
          <li>Cujo [problema que precisa ser resolvido]: o problema ou desafio que os clientes finais enfrentam e que o nosso produto se propõe a resolver.</li>
          <li>O [nome do produto]: o nome ou título do produto. Buscando um nome que seja memorável e reflita a essência do que estamos oferecendo.</li>
          <li>É um [categoria do produto]: a categoria ou classificação do produto.</li>
          <li>Que [benefício chave, razão para adquirí-lo]: o benefício principal que os clientes finais obterão ao adquirir o produto. Quais são os pontos fortes e únicos que tornam nosso produto atraente e valioso para os clientes?</li>
          <li>Diferentemente da [alternativa da concorrência]: as alternativas existentes no mercado que tentam abordar o mesmo problema que do nosso produto e como o nosso produto se diferencia e se destaca em relação a essas alternativas. Quais são as vantagens competitivas do nosso produto?</li>
          <li>O nosso produto [diferença chave]: a diferença chave ou o valor único que o produto oferece em comparação com as alternativas existentes. Uma funcionalidade exclusiva, uma abordagem inovadora, uma melhor relação custo-benefício, entre outros aspectos distintivos.</li>
        </ul>
        <br />
        <p>A visão do produto, ao preencher esses elementos, fornece uma descrição concisa e clara do que o produto representa, quem são os clientes que desejamos atingir, quais problemas pretendemos resolver e como nosso produto se diferencia no mercado, o que ajuda a orientar o desenvolvimento, o marketing e a estratégia geral do produto.</p>
        <br />
        <p>Em seguida, realizamos uma discussão em grupo e definimos a seguinte visão de produto:</p>
        <br />
        <ul className='documentation_product_discovery_list'>
          <li>Para: Cientistas de dados do time de análise e detecção de fraude de instituições financeiras</li>
          <li>Cujo(a): Transações bancárias de cartão de crédito necessitam de insights sobre os seus dados para mitigar fraudes</li>
          <li>O: 4banks</li>
          <li>É um(a): Plataforma de análise de dados</li>
          <li>Que: Fornece insights, de alto e baixo nível detalhando a metodologia usada para facilitar a tomada de decisões</li>
          <li>Diferentemente de: Produtos internos utilizados nos sistemas bancários atualmente, outros produtos do pantanal.dev</li>
          <li>O nosso produto: É uma plataforma intuitiva que aceita diversos datasets e fornece análises exaustivas gráficas e aprofundadas baseadas na necessidade do cliente</li>
        </ul>
        <br />
        <div className="documentation_product_discovery_product_vision_container">
        <img className="documentation_product_discovery_product_vision"src={product_vision} alt="Product Vision" />
        </div>
        <br />

        <p>Além disso, realizamos a mesma dinâmica individual e em grupo para definirmos o que a nossa plataforma entrega e não entrega ao usuário final:</p>

        <br />
        <div className="documentation_product_discovery_itdoes_container">
        <img className="documentation_product_discovery_itdoes" src={e_naoe_faz_naofaz} alt="O que faz e não faz" />
        </div>
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

      <div className="documentation_bpmn">
        <p className='documentation_bpmn_title'>Modelagem de processo de negócio</p>
        <div className="documentation_bpmn_container">
        <img className="documentation_bpmn_image" src={bpmn} alt="BPMN" />
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
      <div className="eng_soft">
        <p className='eng_soft_title'>Engenharia de Software</p>
        <br />
        <div className="eng_soft_container">
        <p>Durante o desenvolvimento do nosso projeto, a aplicação de uma série de estratégias, ferramentas e conceitos fundamentais da Engenharia de Software foi de suma importância. Nosso foco primordial foi aprimorar a eficiência e garantir a excelência do produto final, mantendo um alinhamento com as melhores práticas do setor.</p>
        <br />
        <p>Na fase de Gerência de Projetos, a plataforma Projects mostrou-se uma ferramenta extremamente útil. Os princípios da Engenharia de Requisitos foram aplicados na descoberta e definição dos requisitos do produto. Enfatizamos a Manutenção de Software ao garantir uma documentação de alta qualidade para a API, refletindo a importância de um registro preciso e atualizado.</p>
          <img className="eng_soft_pipeline" src={pipeline} alt="Api pipeline" />
        <p>No âmbito da Gerência de Configuração, a adoção de um modelo de branch, regras para a revisão de Pull Requests e a prática de commits semânticos foram fundamentais. Esses procedimentos resultaram em um controle de versão eficiente, facilitaram a colaboração entre os membros da equipe e elevaram a qualidade do código.</p>
        <br />
        <p>A utilização de princípios de Engenharia de Software foi ainda mais evidente quando implementamos a integração e a implantação contínuas, além dos testes automatizados, com a ajuda do Github Actions. Esta abordagem intensificou a frequência e a confiabilidade das nossas entregas, ao mesmo tempo em que a qualidade do software melhorou graças à identificação e correção ágeis de problemas.</p>
        <br />
          <img className="eng_soft_github_actions" src={github_actions} alt="Cloud" />
          <p>Finalmente, a decisão estratégica de adotar a Computação em Nuvem para hospedar nossa aplicação e armazenar dados ilustra o nosso compromisso com as mais recentes práticas de Engenharia de Software. Isso resultou em escalabilidade, disponibilidade e segurança notáveis. Além disso, demonstramos a aplicação prática dos princípios de Engenharia de Software ao ajustar os recursos computacionais de acordo com a demanda, otimizando os custos operacionais.</p>
          <br />
          <p>Em resumo, a incorporação dos fundamentos da Engenharia de Software em cada aspecto do nosso projeto nos permitiu entregar um produto de alta qualidade de maneira eficiente e eficaz, respeitando e exemplificando as melhores práticas da indústria.</p>
          <br />
        </div>
      </div>
      </div>

    </div>

  );
}

export default Documentation;
