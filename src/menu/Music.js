import React from 'react';
import '../App.css';
import flower from "../images/flower.jpg";

//Structure for Music
const Music= (props)=>{
  return(
  <div className="screen" style={{backgroundImage:'url('+flower+')'}}>
    <div className="mainScreen">
      iPod.js
      <ul>
        <li className={props.songs?"active":null}>Songs<i className="fas fa-chevron-right"></i></li>
        <li className={props.albums?"active":null}>Albums<i className="fas fa-chevron-right"></i></li>
        <li className={props.artists?"active":null}>Arists<i className="fas fa-chevron-right"></i></li>
        <li className={props.playlists?"active":null}>Playlists<i className="fas fa-chevron-right"></i></li>
      </ul>
    </div>
  </div>
  );
}
export default Music;