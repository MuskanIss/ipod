import React from 'react';
import '../App.css';
import settings from './menuImages/settings.jpg';

const Settings= ()=>{
    return(
      <div className="screen" style={{backgroundImage:'url('+settings+')'}}>
      </div>
    );
}
export default Settings;