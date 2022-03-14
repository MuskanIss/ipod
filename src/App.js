import Wheel from './ipod/Wheel';
import Screen from './ipod/screen';
import Flow from './menu/Flow';
import Albums from './music/Albums';
import Playlists from './music/Playlists';
import Artists from './music/Artists';
import Songs from './music/Songs';
import Games from './menu/Games';
import Settings from './menu/Settings';
import Music from './menu/Music';
import React from 'react';
import ZingTouch from 'zingtouch';

class App extends React.Component{

  constructor(){
    super();
    this.state={
      //menu options displayed
      menu:true,
      flow:false,
      music:false,
      games:false,
      // Music menu highlighted or active from the list
      musicMenu:true,
      albums:false,
      songs:false,
      artists:false,
      playlists:false,
      settings:false,
      //menu highlighted or active out from the list
      active1:true,
      active2:false,
      active3:false,
      active4:false,
    }
  }
  //function for rotating around wheel and highlight option accordingly
  handleRotate = ()=>{
    const target = document.getElementById('outer-circle');
    const region = new ZingTouch.Region(target);
    let angle=0;
    region.bind(target,'rotate',(e)=>{
      angle=angle+e.detail.distanceFromLast;
      //if angle is between -15 to 15 degrees then 1st list item highlihted
      if(angle<15 && angle>-15){
        this.setState({active1:true});
        this.setState({active2:false});
        this.setState({active3:false});
        this.setState({active4:false});
      }
      //else if angle is between -30 to 30 degrees then 2nd list item highlihted
      else if(angle<=30 && angle>=-30){
        this.setState({active2:true});
        this.setState({active1:false});
        this.setState({active3:false});
        this.setState({active4:false});
      }
      //else if angle is between -45 to 45 degrees then 3rd list item highlihted
      else if(angle<=45 && angle>=-45){
        this.setState({active3:true});
        this.setState({active1:false});
        this.setState({active2:false});
        this.setState({active4:false});
      }
      ////if angle is between -60 to 60 degrees then 4th list item highlihted
      else if(angle<=60 && angle>=-60){
        this.setState({active4:true});
        this.setState({active1:false});
        this.setState({active2:false});
        this.setState({active3:false}); 
      }
      // else reset angle value to 0 degree
      else{
        angle=0;
      }
    });
  }
  // function when menu button is clicked
  clickmenu=() =>{
    // if music is not selected and clicked from option i)Flow ii)Music iii)Games iV)Settings
    if(this.state.music===false){
      if(this.state.active1===true ){
        this.setState({flow:true});
        this.setState({menu:false});
      }
      else if(this.state.active2===true){
        this.setState({music:true});
        this.setState({menu:false});
      }
      else if(this.state.active3===true){
        this.setState({games:true});
        this.setState({menu:false});
      }
      else if(this.state.active4===true){
        this.setState({settings:true});
        this.setState({menu:false});
      }
    }
    // else music is selected and clicked from option i)Songs ii)Albums iii)Artists iV)Playlists
    else{
      if(this.state.active1===true ){
        this.setState({musicMenu:false});
        this.setState({songs:true});
      }
      else if(this.state.active2===true){
        this.setState({musicMenu:false});
        this.setState({albums:true});
      }
      else if(this.state.active3===true){
        this.setState({musicMenu:false});
        this.setState({artists:true});
      }
      else if(this.state.active4===true){
        this.setState({musicMenu:false});
        this.setState({playlists:true});
      }
    }
  }

  //function for returning to menu
  backtomenu=()=>{
    //if music is selected and music menu is false, return to music menu screen
    if(this.state.music===true && this.state.musicMenu===false){
      this.setState({musicMenu:true});
      this.setState({playlists:false});
      this.setState({songs:false});
      this.setState({artists:false});
      this.setState({albums:false});
    }
    //Else return to main menu
    else{
    this.setState({menu:true});
    this.setState({flow:false});
    this.setState({music:false});
    this.setState({games:false});
    this.setState({settings:false});}
  }

  render(){
    return (
    <div className="App">
      {this.state.flow && <Flow />}
      {this.state.games && <Games />}
      {this.state.settings && <Settings />}
      {this.state.music && this.state.songs && <Songs/>}
      {this.state.music && this.state.artists && <Artists/>}
      {this.state.music && this.state.playlists && <Playlists/>}
      {this.state.music && this.state.albums && <Albums/>}
      {this.state.music && this.state.musicMenu && <Music songs={this.state.active1} albums={this.state.active2} artists={this.state.active3} playlists={this.state.active4}/>}
      {this.state.menu && <Screen active1={this.state.active1} active2={this.state.active2} active3={this.state.active3} active4={this.state.active4} />}
      <Wheel onhandleRotate={this.handleRotate} clickmenu={this.clickmenu} backtomenu={this.backtomenu}/> 
    </div>
    );
  }
}

export default App;
