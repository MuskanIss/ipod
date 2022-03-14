import React from 'react';
import '../App.css';
import artist from './musicImages/artists.jpg';

const Artists= ()=>{
    return(
      <div className="screen" style={{backgroundImage:'url('+artist+')'}}>
      </div>
    );
}
export default Artists;