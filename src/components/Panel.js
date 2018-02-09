import React, { Component } from "react";

class Panel extends React.Component {
  render() {
    return (
      <div className={`panel panel-${this.props.panelNumber}`}>
        <h2 className="text">-</h2>
        <h1 className="text" onClick={this.props.expand}>
          {"\u2194"}
        </h1>
        <h2 className="text"> -</h2>
      </div>
    );
  }
}

export default Panel;
