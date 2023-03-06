import React, { useState } from "react";
import { Container, Image, Row, Col, ToastContainer, Toast} from "react-bootstrap";
import CardTecnologie from "../components/CardTecnologie";
import BoxVocation from "../components/BoxVocation";
import { dataCard } from "../DATA/DataCard";
import BoxProcess from "../components/BoxProcess";
import BoxSkills from "../components/BoxSkills";
import FormContatti from "../components/FormContatti";
import "../App.css";


export default function HomePage(props) {
    const [show, setShow] = useState(false);
    return (
        <Container flex>
            <Row  className='boxBanner' 
            style={{marginTop:'15%'}}
            >
            <h1            
             >Trasforma i Dati in Informazioni e Conoscenza approfondita
            </h1>
            <p            
            >Wi data offre soluzioni di Data Science, Artifical Intelligence e
            Internet of Things per la monetizzazione dei dati in ambito Smart
            City</p>
            </Row>            
            <div id="tecnologie" className="tecnologie" style={{marginTop:'6%'}}>
                <p style={{ textAlign: 'center' }}>TECNOLOGIE</p>
                <h2>La nostra catena tecnologica per le Smart Cities</h2>
                <Image className="d-block mx-auto img-fluid" alt='alt' src={require("../img/icons/decor-1.png")} />
                <CardTecnologie dataCard={dataCard} />
            </div>
            <div>
                <BoxVocation />
            </div>
            <div id="processo" className="processo">
                <p style={{ textAlign: 'center',marginTop:'8%' }}>IL NOSTRO PROCESSO</p>
                <h2>Approccio data-driven</h2>
                <Image className="d-block mx-auto img-fluid" alt='alt' src={require("../img/icons/decor-1.png")} />
                <BoxProcess />
            </div>
            <div className="box1-skills" style={{marginTop:'10%'}}>
                <div className="box2-skills">
                    <div style={{ position: 'relative',marginLeft: '15%' }}>
                        <p style={{ textAlign: 'left', color: 'white', paddingTop: '5%', zIndex: 3 }}>LE COMPETENZE DI DOMINIO ACQUISITE</p>
                        <Image            
                            alt='alt' src={require("../img/icons/decor-1.png")} style={{ zIndex: 3 }} />
                    </div>
                    <BoxSkills />
                </div>
            </div>
            <div id="contatti" className="box-contatti" style={{ position: 'relative', marginTop: '8%' }}>
                <p style={{ textAlign: 'center' }}>CONTATTI</p>
                <h2 style={{ textAlign: 'center' }}>Inviaci un Messaggio</h2>
                <Image className="d-block mx-auto img-fluid" alt='alt' src={require("../img/icons/decor-1.png")} />
                <FormContatti />
            </div>
            <div style={{ position: 'relative', marginTop: '10%' }}>
                <p style={{ textAlign: 'center' }}>FINANZIAMENTI</p>
                <h2 style={{ textAlign: 'center' }}>Progetto parzialmente finanziato da:</h2>
                <Image className="d-block mx-auto img-fluid" alt='alt' src={require("../img/icons/decor-1.png")} />
                <div onClick={() => setShow(true)}>
                    <ToastContainer position="top-end" className="d-block mx-auto img-fluid" >
                        <Toast bg='light' onClose={() => setShow(false)} show={show} delay={3000} autohide style={{width:'65%', height:'75%'}}>
                            <Toast.Header></Toast.Header>
                            <Image
                                src={require('../img/credit/widata-sito-loghi-istituzionali4.png')}
                                className="d-block mx-auto img-fluid"
                                alt=""
                                style={{ width: 250, height: 250}}
                            />
                            <Toast.Body style={{marginLeft:'5%',marginRight:'5%'}}>
                                <h2>WiData</h2>
                                <h3>1.2.2 RAFFORZAMENTO DEL SISTEMA INNOVATIVO REGIONALE E NAZIONALE</h3>
                                <p>Progetto finanziato dal bando Voucher Startup - www.sardegnaprogrammazione.it</p>
                                <p> WiData è una startup innovativa che intende proporre sul mercato un innovativo
                                    sistema di monitoraggio per la rilevazione del carico antropico attraverso lo sviluppo,
                                    la sperimentazione e prototipazione di sensori IoT innovativi per la rilevazione della
                                    mobilità e densità delle folle, nonché degli algoritmi di intelligenza artificiale
                                    e data analysis che permettono di interpretare i dati raccolti e migliorare la loro accuratezza.
                                    L’impegno in questa direzione ha permesso di sviluppare il prodotto di maggior
                                    interesse per i clienti, PmAnalytics.</p>
                                       
                                       <ul style={{ listStyleType:'none'}}>                                       
                                       <li>TITOLO PROGETTO: People Mobility Analytics</li>
                                       <li>CUP: G89J22000370006</li>
                                       <li>IMPORTO TOTALE DEL PROGETTO: 99.997,00 €</li>
                                       <li>IMPORTO FINANZIATO: 76.997,69 €</li>
                                       <li> FONTE: POR-FESR SARDEGNA 2014-2020</li>
                                       <li>DATE: Data di avvio 16/03/2022 -Data di conclusione 16/03/2023</li> 
                                       <li>CONTATTO: Per ulteriori informazioni info@widata.cloud</li></ul>                        
                                     
                            </Toast.Body>
                        </Toast>
                    </ToastContainer>

                    <Row xs={1} md={2}>
                        <Col><Image className="d-block mx-auto img-fluid" alt='' src={require('../img/credit/widata-sito-loghi-istituzionali.png')} style={{ width: 250, height: 250 }} /></Col>
                        <Col><Image className="d-block mx-auto img-fluid" alt='' src={require('../img/credit/widata-sito-loghi-istituzionali5_sardegnaricerche-nuovo.png')} style={{ width: 250, height: 250 }} /></Col>
                    </Row>
                    <Row xs={1} md={2} lg={3}>
                        <Col><Image className="d-block mx-auto img-fluid" alt='' src={require('../img/credit/widata-sito-loghi-istituzionali4.png')} style={{ width: 200, height: 200 }} /></Col>
                        <Col><Image className="d-block mx-auto img-fluid" alt='' src={require('../img/credit/widata-sito-loghi-istituzionali3.png')} style={{ width: 200, height: 200 }} /></Col>
                        <Col><Image className="d-block mx-auto img-fluid" alt='' src={require('../img/credit/widata-sito-loghi-istituzionali2.png')} style={{ width: 200, height: 200 }} /></Col>
                    </Row>

                </div>
            </div>



        </Container>
    )

}
