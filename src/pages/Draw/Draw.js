import React from "react";
import Header from '../../components/Header/Header';
import Trofeu from '../../assets/images/trofeu.png';

import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";

import './styles.css';

export default function Draw(){
    return(
        <>
        <Header/>
        <section className="container">
            <div className="draw-content">
              <img src={Trofeu} alt="Trofeu logo"></img> <input type="text" disabled></input> 
            </div>

            
        </section>
        <div>
        <button type="button">Sortear agora</button>
        </div>
        
        </>
    )
}