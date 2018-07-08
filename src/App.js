import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//Vega Lite
import VegaLite from 'react-vega-lite';

class App extends Component {

  constructor(props) {
    super(props);

    this.state={
      spec:{},
      barData:{}
    }

    this.state.spec = {
      "description": "A simple bar chart with embedded data.",
      "mark": "bar",
      "encoding": {
        "x": {"field": "departamento", "type": "nominal"},
        "y": {"field": "habilitados", "type": "quantitative"}
      }
    };


    this.state.barData = {
      "values": [
        {"departamento": "A","habilitados": 20}, {"departamento": "B","habilitados": 34}, {"departamento": "C","habilitados": 55},
        {"departamento": "D","habilitados": 19}, {"departamento": "E","habilitados": 40}, {"departamento": "F","habilitados": 34},
        {"departamento": "G","habilitados": 91}, {"departamento": "H","habilitados": 78}, {"departamento": "I","habilitados": 25}
      ]
    };
    this.state.barData = {
      "url": "data/participacion.csv"
    }
  }
    

  render() {
    return (
      <div className="App">
      <h1> Info-Col</h1>
      <h3> Descubre información sobre las elecciones en Colombia</h3>   
        <p className="App-intro">
          Gustavo Petro e Ivan Duque
        </p>
        <VegaLite spec={this.state.spec} data={this.state.barData} />
      </div>
    );
  }
}

export default App;
