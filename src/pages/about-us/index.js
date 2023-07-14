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
        <p className="about_us_intro_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus nec urna accumsan mollis. Ut pretium, lorem vitae interdum hendrerit, quam purus fermentum dolor, in ultrices nisl ipsum sed nunc.</p>
        </div>
        <AboutUsProfile
          name="Fabio Huang"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus nec urna accumsan mollis. Ut pretium, lorem vitae interdum hendrerit, quam purus fermentum dolor, in ultrices nisl ipsum sed nunc. Curabitur ornare quam enim, sit amet finibus lacus efficitur ac. Etiam semper bibendum velit at pharetra"
          url_photo={fabio_huang}
          link_linkedin="https://www.linkedin.com/in/f%C3%A1bio-huang-0aa05b257/"
          link_github="https://github.com/FabioHuang"
        />
        <AboutUsProfile
          name="João Pedro Vareiro"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus nec urna accumsan mollis. Ut pretium, lorem vitae interdum hendrerit, quam purus fermentum dolor, in ultrices nisl ipsum sed nunc. Curabitur ornare quam enim, sit amet finibus lacus efficitur ac. Etiam semper bibendum velit at pharetra"
          url_photo={joao_vareiro}
          link_linkedin="https://www.linkedin.com/in/joaovareiro/"
          link_github="https://github.com/joaovareiro"
        />
        <AboutUsProfile
          name="Lourdes Oshiro Igarashi"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus nec urna accumsan mollis. Ut pretium, lorem vitae interdum hendrerit, quam purus fermentum dolor, in ultrices nisl ipsum sed nunc. Curabitur ornare quam enim, sit amet finibus lacus efficitur ac. Etiam semper bibendum velit at pharetra"
          url_photo={lourdes_oshiro}
          link_linkedin="https://www.linkedin.com/in/lourdes-oshiro-igarashi/"
          link_github="https://github.com/LourdesOshiroIgarashi"
        />
        <AboutUsProfile
          name="Tiago Santi"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus nec urna accumsan mollis. Ut pretium, lorem vitae interdum hendrerit, quam purus fermentum dolor, in ultrices nisl ipsum sed nunc. Curabitur ornare quam enim, sit amet finibus lacus efficitur ac. Etiam semper bibendum velit at pharetra"
          url_photo={tiago_santi}
          link_linkedin="https://www.linkedin.com/in/tiago-santi/"
          link_github="https://github.com/TiagoSanti"
        />
        <AboutUsProfile
          name="Mentor - Matheus Mello"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur tellus nec urna accumsan mollis. Ut pretium, lorem vitae interdum hendrerit, quam purus fermentum dolor, in ultrices nisl ipsum sed nunc. Curabitur ornare quam enim, sit amet finibus lacus efficitur ac. Etiam semper bibendum velit at pharetra"
          url_photo={mateus_mello}
          link_linkedin="https://www.linkedin.com/in/mateuspmello/"
          link_github="https://github.com/mateuspmello"
        />
      </div>
    </div>
  );
}

export default AboutUs;
