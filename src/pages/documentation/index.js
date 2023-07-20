import React from 'react';
import '../../styles/documentation.css';
import DocumentationDescription from '../../components/DocumentationDescription';
import product_vision from '../../assets/product_vision.png';
import '../../styles/documentation-description.css'
import '../../styles/global.css'

function Documentation() {
  return (
    <div className='documentation'>
      <div className="documentation_intro">
        <p className='documentation_intro_title'>Documentação</p>
        <p className='documentation_intro_text'>Saiba mais sobre as técnicas e ferramentas utilizadas para a criação desse produto e os artefatos gerados no processo do desenvolvimento do software.</p>
        <p className='documentation_product_discovery_title'>Descoberta do produto</p>
        <p className='documentation_product_discovery_subtitle'>Visão do produto</p>
        <img src={product_vision} alt="Product Vision" />
      </div>
      <DocumentationDescription
        mainTitle="Configuração de Software"
        mainDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat iaculis sapien, eget laoreet lacus rhoncus porttitor. Cras suscipit consectetur urna, at tincidunt augue finibus vel. Proin at sodales ipsum, quis tempor risus. Donec posuere vel ante ut feugiat. Nullam eleifend fringilla purus, porta consequat ante molestie eget. Proin elementum, risus ac luctus euismod, nisi justo fermentum turpis, ac blandit urna lacus et dolor. Sed pharetra leo sed augue dignissim dictum. Maecenas lacinia lacinia arcu vel varius. In tempor augue id mattis ullamcorper. Proin in orci pretium, viverra elit vel, sodales enim. Nulla facilisi. Etiam vulputate molestie ante ut pretium. Aliquam vulputate turpis id nisi dictum lobortis. Quisque est mauris, convallis ut egestas et, sodales sit amet ligula. Suspendisse potenti. Maecenas quam risus, elementum a luctus et, egestas sit amet justo."
        leftTitle="Commits semânticos"
        leftDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat iaculis sapien, eget laoreet lacus rhoncus porttitor. Cras suscipit consectetur urna, at tincidunt augue finibus vel. Proin at sodales ipsum, quis tempor risus. Donec posuere vel ante ut feugiat. Nullam eleifend fringilla purus, porta consequat ante molestie eget. Proin elementum, risus ac luctus euismod, nisi justo fermentum turpis, ac blandit urna lacus et dolor. Sed pharetra leo sed augue dignissim dictum. Maecenas lacinia lacinia arcu vel varius. In tempor augue id mattis ullamcorper. Proin in orci pretium, viverra elit vel, sodales enim. Nulla facilisi. Etiam vulputate molestie ante ut pretium. Aliquam vulputate turpis id nisi dictum lobortis. Quisque est mauris, convallis ut egestas et, sodales sit amet ligula. Suspendisse potenti. Maecenas quam risus, elementum a luctus et, egestas sit amet justo."
        rightTitle="Modelo de ramificação"
        rightDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat iaculis sapien, eget laoreet lacus rhoncus porttitor. Cras suscipit consectetur urna, at tincidunt augue finibus vel. Proin at sodales ipsum, quis tempor risus. Donec posuere vel ante ut feugiat. Nullam eleifend fringilla purus, porta consequat ante molestie eget. Proin elementum, risus ac luctus euismod, nisi justo fermentum turpis, ac blandit urna lacus et dolor. Sed pharetra leo sed augue dignissim dictum. Maecenas lacinia lacinia arcu vel varius. In tempor augue id mattis ullamcorper. Proin in orci pretium, viverra elit vel, sodales enim. Nulla facilisi. Etiam vulputate molestie ante ut pretium. Aliquam vulputate turpis id nisi dictum lobortis. Quisque est mauris, convallis ut egestas et, sodales sit amet ligula. Suspendisse potenti. Maecenas quam risus, elementum a luctus et, egestas sit amet justo."
      />
      <DocumentationDescription
        mainTitle="Gerência de Projeto"
        mainDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat iaculis sapien, eget laoreet lacus rhoncus porttitor. Cras suscipit consectetur urna, at tincidunt augue finibus vel. Proin at sodales ipsum, quis tempor risus. Donec posuere vel ante ut feugiat. Nullam eleifend fringilla purus, porta consequat ante molestie eget. Proin elementum, risus ac luctus euismod, nisi justo fermentum turpis, ac blandit urna lacus et dolor. Sed pharetra leo sed augue dignissim dictum. Maecenas lacinia lacinia arcu vel varius. In tempor augue id mattis ullamcorper. Proin in orci pretium, viverra elit vel, sodales enim. Nulla facilisi. Etiam vulputate molestie ante ut pretium. Aliquam vulputate turpis id nisi dictum lobortis. Quisque est mauris, convallis ut egestas et, sodales sit amet ligula. Suspendisse potenti. Maecenas quam risus, elementum a luctus et, egestas sit amet justo."
        leftTitle="Kanban"
        leftDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat iaculis sapien, eget laoreet lacus rhoncus porttitor. Cras suscipit consectetur urna, at tincidunt augue finibus vel. Proin at sodales ipsum, quis tempor risus. Donec posuere vel ante ut feugiat. Nullam eleifend fringilla purus, porta consequat ante molestie eget. Proin elementum, risus ac luctus euismod, nisi justo fermentum turpis, ac blandit urna lacus et dolor. Sed pharetra leo sed augue dignissim dictum. Maecenas lacinia lacinia arcu vel varius. In tempor augue id mattis ullamcorper. Proin in orci pretium, viverra elit vel, sodales enim. Nulla facilisi. Etiam vulputate molestie ante ut pretium. Aliquam vulputate turpis id nisi dictum lobortis. Quisque est mauris, convallis ut egestas et, sodales sit amet ligula. Suspendisse potenti. Maecenas quam risus, elementum a luctus et, egestas sit amet justo."
        rightTitle="Scrum"
        rightDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat iaculis sapien, eget laoreet lacus rhoncus porttitor. Cras suscipit consectetur urna, at tincidunt augue finibus vel. Proin at sodales ipsum, quis tempor risus. Donec posuere vel ante ut feugiat. Nullam eleifend fringilla purus, porta consequat ante molestie eget. Proin elementum, risus ac luctus euismod, nisi justo fermentum turpis, ac blandit urna lacus et dolor. Sed pharetra leo sed augue dignissim dictum. Maecenas lacinia lacinia arcu vel varius. In tempor augue id mattis ullamcorper. Proin in orci pretium, viverra elit vel, sodales enim. Nulla facilisi. Etiam vulputate molestie ante ut pretium. Aliquam vulputate turpis id nisi dictum lobortis. Quisque est mauris, convallis ut egestas et, sodales sit amet ligula. Suspendisse potenti. Maecenas quam risus, elementum a luctus et, egestas sit amet justo."
      />
    </div>

  );
}

export default Documentation;
