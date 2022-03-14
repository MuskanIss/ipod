import React from 'react';

//Structure for Wheel
const Wheel = (props)=>{
    return(
      <div style={styles.wheel}>
        <div id="outer-circle" style={styles.OuterCirlce} onMouseOver={props.onhandleRotate} >
          <div className="icons" style={styles.icons}>
            <button style={styles.menu} onClick={props.backtomenu}>Menu</button>
            <i className="fas fa-fast-forward" style={styles.forward}></i>
            <i className="fas fa-fast-backward" style={styles.backward}></i>
              <i className="fas fa-play" style={styles.play}></i>
              <i className="fas fa-pause" style={styles.pause}></i>
          </div>
          <button style={styles.InnerCircle} onClick={props.clickmenu}>
          </button>
        </div>
      </div>
    );
}

//Styling for Wheel
const styles ={
  wheel:{
      display:'inline-block',
      marginLeft:'10vh',
      marginTop: '4vh',
  },

  OuterCirlce:{
    backgroundColor: '#f6f6f8',
    height:'25vh',
    width:'25vh',
    borderRadius: '50%',
    display: 'inline-block',
  },
  
  InnerCircle:{
    borderRadius: '50%',
    border:'none',
    backgroundColor: '#b3b6b8',
    height:'9vh',
    width:'9vh',
    marginTop:'8vh',
    marginLeft:'8vh',
  },

  icons:{
    position:'absolute',
  },

  menu:{
    border:'none',
    backgroundColor:'transparent',
    display:'inline-block',
    position:'absolute',
    left:'8vh',
    top:'3vh',
    color:'#99999c',
  },

  forward:{
    top:'11vh',
    left:'20vh',
    position:'absolute',
    color:'#99999c',
   },

   backward:{
     top:'11vh',
     left:'3vh',
     position:'absolute',
     color:'#99999c',
    },

    play:{
     top:'20vh',
     left:'10vh',
     position:'absolute',
     color:'#99999c',
     fontSize: '75%',
    },
    
    pause:{
     top:'20vh',
     left:'12vh',
     position:'absolute',
     color:'#99999c',
     fontSize: '75%',
    },
}
export default Wheel;