import React, { Component } from "react";
import Panel from "./components/Panel";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.renderPanel = this.renderPanel.bind(this);
    this.expand = this.expand.bind(this);
  }
  renderPanel(i) {
    return <Panel expand={() => this.expand(i)} panelNumber={i} />;
  }

  expand(i) {
    const panel = document.querySelectorAll(".panel")[i];
    panel.classList.toggle("open");
    setTimeout(function() {
      panel.classList.toggle("text-open");
    }, 500);
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          {this.renderPanel(0)}
          {this.renderPanel(1)}
          {this.renderPanel(2)}
          {this.renderPanel(3)}
          {this.renderPanel(4)}
        </div>
      </div>
    );
  }
}

export default App;
