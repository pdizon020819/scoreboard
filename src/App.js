import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit, faCheck, faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(faEdit, faCheck, faSun, faMoon);


class App extends React.Component{

  constructor(props){
      super(props);
      this.state = {
        home: 0,
        away: 0,
        readOnly: true,
        icon: faEdit,
        light: false,
        theme: "light-mode",
        themeIcon: faSun,
      }
      this._click = this._click.bind(this);
      this.Theme = this.Theme.bind(this);
  }

  _click(){
    this.setState(prevState => ({readOnly: !prevState.readOnly}));
    this.setState(prevState => ({icon:  prevState.readOnly ? faEdit : faCheck}));
 }

  Home(type){
   this.setState(prevState => {
      if (prevState.home > 0){
        return {home: type === 'add' ? prevState.home + 1: prevState.home - 1}
      }
      else{
        return {home: type === 'add' ? prevState.home + 1: prevState.home = 0}
      }
    });
  }

Away(type){
  this.setState(prevState => {
     if (prevState.away > 0){
      return {away: type === 'add' ? prevState.away + 1: prevState.away - 1}
     }
     else{
       return {away: type === 'add' ? prevState.away + 1: prevState.away = 0}
     }
  });
  }

Theme(){
  this.setState(prevState => ({light: !prevState.light}));
  this.setState(prevState => ({theme:  prevState.light ? "dark-mode" : "light-mode"}))
  this.setState(prevState => ({themeIcon:  prevState.light ? faMoon : faSun}))
}
  

 render () {
   return (
     <div className="App">
      <div class={this.state.theme}>
        <div className="head">
          <p>Scoreboard</p>
        </div>

      <nav className='theme'>
          <div className='toggle-container'>
            <FontAwesomeIcon className="faicons sun moon" icon={this.state.themeIcon} onClick={this.Theme}></FontAwesomeIcon>
          </div>
      </nav>

        <hr/>
        <br/>
        <div className="teamName">
            <form>
              <input placeholder="Team 1" readOnly={this.state.readOnly}></input>
              <span>
                <FontAwesomeIcon className="faicons edit check" icon={this.state.icon} onClick={this._click}></FontAwesomeIcon>
              </span>
            </form>

            <form>
              <input placeholder="Team 2" readOnly={this.state.readOnly}></input>
              <span>
                <FontAwesomeIcon className="faicons edit check" icon={this.state.icon} onClick={this._click}></FontAwesomeIcon>
              </span>
            </form>
            
            
        </div>

        <div className="score scoreHolder">
          <div>
            <p>{this.state.home}</p>
            <input type="button" onClick={this.Home.bind(this, "sub")} value = "-"/>
            <input type="button" onClick={this.Home.bind(this, "add")} value = "+"/>

          </div>
          <div>
            <p>{this.state.away}</p>
            <input type="button" onClick={this.Away.bind(this, "sub")} value = "-"/>
            <input type="button" onClick={this.Away.bind(this, "add")} value = "+"/>

          </div>

        </div>
        <hr/>
      </div>
      </div>
   );
 }
}

export default App;
