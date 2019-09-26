import React from 'react';
import './Ligth.css';

class Ligth extends React.Component {

  render() {

    let finalClass = this.props.color + " ligth " + (this.props.selected ? "selected" : "")
      return (
        <button className={finalClass} onClick={(e) => {
          e.preventDefault();
          this.props.click(this.props.color)
        }}></button>
      );
  }
}

export default Ligth;
