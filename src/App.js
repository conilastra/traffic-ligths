import React from 'react';
import './Ligth.css';
import './index.css';
import Ligth from './Ligth';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      red: "red ligth",
      yellow: "yellow ligth",
      green: "green ligth",
    }
  }
  
  lightOn = (e) => {
    e.preventDefault();
    this.setState = {
      red: "red ligth selected",
      yellow: "yellow ligth selected",
      green: "green ligth selected"
    }
  }

  render (){
    return (
      <main>
        <div className="trafficTop"></div>
        <div className="container">
          < Ligth color={this.state.red} onClick={this.lightOn}/>
          < Ligth color={this.state.yellow} onClick={this.lightOn}/>
          < Ligth color={this.state.green} onClick={this.lightOn}/>
        </div>
      </main>
    );
  }

  
}


export default App;
