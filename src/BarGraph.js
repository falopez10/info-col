import React, { Component } from 'react';
//Vega Lite
import VegaLite from 'react-vega-lite';

class BarGraph extends Component {

	constructor(props) {
    super(props);

    this.state={
      spec:{},
      barData:{}
    }

    this.consultasSpec = {
      "description": "Información sobre participación en elecciones de senado y camara.",
      "mark": "bar",
      "transform": [
      	{"filter":"datum.votacion == 'gran_consulta_por colombia' || datum.votacion == 'consulta_inclusion_social_por_la_paz'"},
      	// {"filter":"datum.habilitados>=100000"},
      	{"calculate":"datum.votacion == 'gran_consulta_por colombia' ? 'Centro Democrático' : 'Colombia Humana'", "as":"consulta"}
      ],
      "encoding": {
        "x": {"field": "departamento", "type": "nominal"},
        "y": {"aggregate":"sum","field": "votantes", "type": "quantitative", "stack":null},
        "color": {
		      "field": "consulta", "type": "nominal",
		      "scale": {"range": ["#4C78A8", "#B22222"]}
		    },
		    "opacity":{"value":0.7}
      }
    };


    this.praVueltaSpec = {
    	"description": "Información sobre participación en elecciones de senado y camara.",
      "layer": [
		    {
		      "mark": "bar",
		      "encoding": {
		        "x": {"field": "departamento", "type": "nominal"},
		        "y": {"aggregate":"sum","field": "iván duque", "type": "quantitative"},
		        "color": {"value": "#4C78A8"}
		      }
		    },
		    {
		      "mark": "bar",
		      "encoding": {
		        "x": {"field": "departamento", "type": "nominal"},
		        "y": {"aggregate":"sum","field": "gustavo petro", "type": "quantitative"},
		        "color": {"value": "#B22222"},
		        "opacity":{"value":0.7}
		      }
		    }
		  ],
		  "resolve": {
		    "scale": {"y": "shared", "x": "shared"}
		  }
    }

    this.consultasData = {
      "url": "data/participacion.csv"
    };

    this.praVueltaData = {
    	"url": "data/primera_vuelta_presidencial.csv"
    }

    this.sdaVueltaData = {
    	"url": "data/segunda_vuelta_presidencial.csv"
    }

    this.setUpGraph(this.props.info);
  }

  setUpGraph(info) {
  	if(info==="consultas"){
	  	this.state.spec=this.consultasSpec;
	  	this.state.barData=this.consultasData;
  	}
  	if(info==="praVuelta"){
	  	this.state.spec=this.praVueltaSpec;
	  	this.state.barData=this.praVueltaData;
  	}
  	if(info==="sdaVuelta"){
	  	this.state.spec=this.praVueltaSpec;
	  	this.state.barData=this.sdaVueltaData;
  	}
  }

  darTitulo(){
  	let info = this.props.info;
  	if(info==="consultas")
  		return "Consultas realizadas en elecciones de camara y senado";
  	if(info==="praVuelta")
  		return "Presidenciales: primera vuelta";
  	if(info==="sdaVuelta")
  		return "Presidenciales: segunda vuelta";
  }

	render() {
		return (
			<div>
				<h4>{this.darTitulo()}</h4>
				<VegaLite spec={this.state.spec} data={this.state.barData} />
			</div>
		);
	}
}

export default BarGraph