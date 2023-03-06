import React from "react";
import { Container, Image } from "react-bootstrap";
import CardTecnologie from "../components/CardTecnologie";
import BoxVocation from "../components/BoxVocation";
import { dataCard } from "../DATA/DataCard";
import BoxProcess from "../components/BoxProcess";
import BoxSkills from "../components/BoxSkills";
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
                <p style={{ textAlign: 'center' }}>TECNOLOGIE</p>
                <h2>La nostra catena tecnologica per le Smart Cities</h2>
                <Image className="d-block mx-auto img-fluid" alt='alt' src={require("../img/icons/decor-1.png")} />
                <CardTecnologie dataCard={dataCard} />
            </div>
            <div>
                <BoxVocation />
            </div>
            <div className="processo">
                <p style={{ textAlign: 'center' }}>IL NOSTRO PROCESSO</p>
                <h2>Approccio data-driven</h2>
                <Image className="d-block mx-auto img-fluid" alt='alt' src={require("../img/icons/decor-1.png")} />
                <BoxProcess />
            </div>
            <div className="box1-skills">                
                <div className="box2-skills">
                    <div 
                    style={{ position: 'relative',marginLeft:'15%' }}
                    >
                        <p style={{ textAlign: 'left', color: 'white', paddingTop: '5%', zIndex: 3 }}>LE COMPETENZE DI DOMINIO ACQUISITE</p>
                        <Image
                            //className="d-block mx-auto img-fluid" 
                            alt='alt' src={require("../img/icons/decor-1.png")} style={{ zIndex: 3 }} />
                    </div>

                    <BoxSkills />
                </div>
            </div>
            <div className="box-contatti" style={{position:'relative',margintTop:'50%'}}>
            <p style={{ textAlign: 'center' }}>CONTATTI</p>
            <h2>Inviaci un Messaggio</h2>
            <Image className="d-block mx-auto img-fluid" alt='alt' src={require("../img/icons/decor-1.png")} />
            </div>



        </Container>
    )

}
