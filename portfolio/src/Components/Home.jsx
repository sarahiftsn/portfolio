import React from "react";
import './Home.scss'; 
import { FaHome, FaPhone } from 'react-icons/fa';
import About from "./About";
import Comp from "./Competences";

const Home = () => {
    return (
        <div id="home">
            <div className="step1">
                <div className="presentation">
                    <h1> Sarah Iftissene</h1>
                    <h2> <span>Développeuse</span> web</h2>
                    <p>VOIR MON PORTFOLIO</p>
                </div>
                <div className="imgmoi">
                    <img src='80al.gif' alt="Logo" />
                </div>
                <div className="quote-container">
                    <blockquote className="quote-text">
                        "Web development is not just about making websites, it's about sculpting the digital experience."
                    </blockquote>
                    <cite className="quote-author">- Technology & Development</cite>
                </div>
            </div>
            
          
            
           
        </div>
        
       
    );
};

export default Home;
