import React from 'react';
import '../App.css';
import songs from './musicImages/songs.png';

const Songs= ()=>{
    return(
      <div className="screen" style={{backgroundImage:'url('+songs+')'}}>
      </div>
    );
}
export default Songs;