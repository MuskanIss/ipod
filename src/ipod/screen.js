import React from 'react';
import '../App.css';
import flower from "../images/flower.jpg";

//Structure for screen 
const Screen = (props)=>{
    return(
      <div className="screen" style={{backgroundImage:'url('+flower+')'}}>
          <div className="mainScreen">
              iPod.js
              <ul>
                <li className={props.active1?"active":null}>Flow<i className="fas fa-chevron-right"></i></li>
                <li className={props.active2?"active":null}>Music<i className="fas fa-chevron-right"></i></li>
                <li className={props.active3?"active":null}>Games<i className="fas fa-chevron-right"></i></li>
                <li className={props.active4?"active":null}>Settings<i className="fas fa-chevron-right"></i></li>
            </ul>
          </div>
      </div>
    );
}
export default Screen;