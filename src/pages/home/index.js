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
        <p className='home_intro_info_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rhoncus purus et tempus varius. Nam facilisis diam libero, sit amet placerat felis varius sed. Mauris id sem lacinia massa rutrum condimentum quis a risus. In eleifend rutrum massa in gravida. Aliquam erat volutpat. Ut tincidunt, sapien bibendum porta tristique, enim tellus rhoncus ex, ac rhoncus mi sem sed enim. Quisque imperdiet aliquam sapien, eu pretium ante. Nullam vehicula dapibus neque eu dignissim. Aliquam urna sem, placerat et mollis in, interdum id ex. Aliquam maximus feugiat augue et pellentesque. Donec sit amet auctor libero. Cras consequat lectus risus, nec faucibus nunc feugiat id. Vivamus vel porta tortor, eu venenatis odio. Ut euismod sed lacus vitae facilisis. Nullam vehicula dapibus neque eu dignissim. Aliquam urna sem, placerat et mollis in, interdum id ex. Aliquam maximus feugiat augue et pellentesque. Donec sit amet auctor libero. Cras consequat lectus risus, nec faucibus nunc feugiat id. Vivamus vel porta tortor, eu venenatis odio. Ut euismod sed lacus vitae facilisis.</p>
        <Link to="/analise" className='home_intro_info_button'>
              Nova análise
            </Link>
        </div>
        <img src={finance_home} alt="finance_home" className='home_intro_info_image'/>
        </div>
      </div>
    </div>
  );
}

export default Home;
