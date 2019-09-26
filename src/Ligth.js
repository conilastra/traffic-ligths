import React from 'react';
import './Ligth.css';

class Ligth extends React.Component {
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


    render() {
        return (
            <button className={this.props.color} onClick={this.lightOn}></button>
        );
    }
}

export default Ligth;
