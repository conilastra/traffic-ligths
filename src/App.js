import React from 'react';
import './Ligth.css';
import './index.css';
import Ligth from './Ligth';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: ''
    }
  }
  
  lightOn = (color) => {
    this.setState({
      selected: color
    });
  }

  render (){
    return (
      <main>
        <div className="trafficTop"></div>
        <div className="container">
          < Ligth color="red" click={this.lightOn} selected={this.state.selected === "red"}/>
          < Ligth color="yellow" click={this.lightOn} selected={this.state.selected === "yellow"}/>
          < Ligth color="green" click={this.lightOn} selected={this.state.selected === "green"}/>
        </div>
      </main>
    );
  }

  
}


export default App;
