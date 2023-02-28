import React from "react";
import { Container,Image} from "react-bootstrap";
import CardTecnologie from "../components/CardTecnologie";
import { dataCard } from "../DATA/DataCard";
import "../App.css";

export default function HomePage(props) {
  return (
      <Container flex>
          <div className="banner">
              <div
                  className="contect-box"
                  style={{ marginTop: 225, marginLeft: 200 }}
              >
                  <h1>Trasforma i Dati in Informazioni e Conoscenza approfondita</h1>
                  <p>Wi data offre soluzioni di Data Science, Artifical Intelligence e
                  Internet of Things per la monetizzazione dei dati in ambito Smart
                  City.</p>               
              </div>              
          </div>
          <div className="tecnologie">
          <p style={{textAlign:'center'}}>TECNOLOGIE</p>
          <h2>La nostra catena tecnologica per le Smart Cities</h2>
          <Image  className="d-block mx-auto img-fluid" alt='alt' src={require("../img/icons/decor-1.png")}/>
           <CardTecnologie dataCard={dataCard}/>
          </div>
      </Container>
  );
}
