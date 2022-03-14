import React from 'react';
import '../App.css';
import playlist from './musicImages/playlist.jpg';

const Playlists= ()=>{
    return(
      <div className="screen" style={{backgroundImage:'url('+playlist+')'}}>
      </div>
    );
}
export default Playlists;