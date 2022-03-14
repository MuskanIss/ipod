import React from 'react';
import '../App.css';
import album from './musicImages/playlist.jpg';

const Albums= ()=>{
    return(
      <div className="screen" style={{backgroundImage:'url('+album+')'}}></div>
    );
}
export default Albums;