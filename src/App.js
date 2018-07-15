import React, { Component } from 'react';
import './App.css';

import BarGraph from "./BarGraph.js";

class App extends Component {

    

  render() {
    return (
      <div className="App container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <a className="navbar-brand" href="#">InfoCol</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#generales">Resultados Generales</a>
              <a className="nav-item nav-link active" href="#consultas">Consultas vs Presidenciales</a>
              <a className="nav-item nav-link" href="#autor">Autor</a>
            </div>
          </div>
        </nav>
        <img src="/infoColIcon.JPG" alt="infocol" height="250" width="200"/>
        
        <p id="introduccion" className="App-intro col">
          Entérate de análisis y estadísticas interesantes sobre las elecciones presidenciales de Colombia del 2018
        </p>
        <div id="generales">
          <br/>
          <br/>
          <br/>
          <h3>Las elecciones presidenciales</h3>
          <p>El domingo 27 de mayo de 2018 se celebraron las elecciones presidenciales de Colombia. Los resultados de estas elecciones fue necesaria una segunda ronda electoral el domingo 17 de junio de 2018.</p>
          <p>Los siguientes fueron los tres candidatos más votados: </p>
          <div className="row text-center">
            <div id="duque-card" class="card col" >
              <center><img class="card-img-top card-img rounded-circle img-fluid" src="/resources/duque.png" alt="Card image cap"/></center>
              <div class="card-body">
                <h5 class="card-title">Iván Duque</h5>
                <h6 class="card-subtitle mb-2 text-muted">Centro Democrático</h6>
                <p class="card-text">Lideró las votaciones en las dos fechas, siendo actualmente el presidente electo de Colombia. Su campaña política fue respaldada por figuras fuertes como los expresidentes Álvaro Uribe y Andrés Pastrana, apoyo que junto con su identidad joven y renovadora dieron una palanca fuerte para ser escogido presidente.</p>
                <p class="card-text">Obtuvo <strong>39.34%</strong>(7.616.857) de los votos en primera vuelta.</p>
                <p class="card-text">Obtuvo <strong>54.03%</strong>(10.398.689) de los votos en segunda vuelta.</p>
                <a href="https://es.wikipedia.org/wiki/Iv%C3%A1n_Duque_M%C3%A1rquez" class="btn btn-primary">Saber más</a>
              </div>
            </div>
            <div id="petro-card" class="card col">
              <center><img class="card-img-top card-img rounded-circle img-fluid" src="/resources/petro.jpg" alt="Gustavo Petro"/></center>
              <div class="card-body">
                <h5 class="card-title">Gustavo Petro</h5>
                <h6 class="card-subtitle mb-2 text-muted">Colombia Humana</h6>
                <p class="card-text">Candidato de Colombia Humana. Ha sido el candidato de izquierda con mayor cantidad de votos de izquierda en la historia de Colombia. en la actualidad aceptó el cargo de senador que le fue ofrecido tras su derrota en las elecciones</p>
                <p class="card-text">Obtuvo <strong>25.08%</strong>(4.855.069) de los votos en primera vuelta.</p>
                <p class="card-text">Obtuvo <strong>41.77%</strong>(8.040.449) de los votos en primera vuelta.</p>
                <a href="https://es.wikipedia.org/wiki/Gustavo_Petro" class="btn btn-primary">Saber más</a>
              </div>
            </div>
            <div id="fajardo-card" class="card col">
              <center><img class="card-img-top card-img rounded-circle img-fluid" src="/resources/fajardo.jpg" alt="Card image cap"/></center>
              <div class="card-body">
                <h5 class="card-title">Sergio Fajardo</h5>
                <h6 class="card-subtitle mb-2 text-muted">Compromiso Ciudadano</h6>
                <p class="card-text">Propuso su candidatura apoyado otros sectores políticos, formando la Coalición Colombia. A pesar de haber perdido por menos de 260.000 votos su cupo a la segunda vuelta, logró perfilarse como una nueva fuerza basando su campaña en la educación y el voto de opinión</p>
                <p class="card-text">Obtuvo <strong>23.78%</strong>(4.602.916) de los votos en primera vuelta.</p>
                <a href="https://es.wikipedia.org/wiki/Sergio_Fajardo" class="btn btn-primary">Saber más</a>
              </div>
            </div>
          </div>
        </div>
        <div id="consultas">
        <br/>
        <br/>
        <br/>
        <h3>Un breve análisis sobre las consultas y sus candidatos</h3>
        <br/>
        <p>Una de las primeras peculiaridades que se pueden tener en cuenta a la hora de observar a los candidatos más fuertes es que ambos candidatos de segunda vuelta acudieron a una consulta abierta, en marzo, donde los votantes decidieron si serían ellos u otros contrincantes quienes representarían a su partido político. </p>
        <p> Suena bastante obvio que coaliciones políticas permitan tener al candidato una mejor plataforma, pero gracias a la <a href="https://github.com/infrahumano/elecciones2018">recopilación de información por infrahumano</a>, logré hacer un acercamiento a la relación que tienen las áreas de colombia donde más se votó una u otra consulta con el candidato que más se apoyó entre los dos finales</p>
          <BarGraph id="consultas" info="consultas"/>
          <BarGraph info="praVuelta"/>
          <BarGraph info="sdaVuelta"/>
          <p>Al comparar los resultados para ambos partidos, se ve la siguiente tendencia: <i>departamento donde se vota más una consulta, departamento donde gana candidato de ese partido</i>. Un caso especial se ve con áreas como Bogotá, donde sería bueno realizar un nuevo análisis para entender por qué se comporta exactamente al contrario, pasando de una consulta donde participan 200.000 ciudadanos más para el Centro Democrático, en contraste con una votación por encima de los 100.000 para Petro en primera, y de 400.000 en segunda vuelta.</p>
          <p>El fenómeno definitivamente está presente. Es importante evaluar otros factores (como la repartición de los votos del candidato Sergio Fajardo en segunda vuelta) para sacar conclusiones aún más dicientes. Sin embargo con los resultados obtenidos se puede meditar sobre cómo las coaliciones pueden afectar la proyección de los candidatos, análisis que seguramente se hicieron muchos partidarios del centro en Colombia.</p>
        </div>
        <div id="autor">Hecho por <a href="https://falopez10.github.io"> Fabio López</a>. 2018</div>
      </div>
    );
  }
}

export default App;
