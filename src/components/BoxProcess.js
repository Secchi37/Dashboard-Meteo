import React from "react";
import { Badge, Card, CardGroup, Container, Row } from "react-bootstrap";
import { datiP } from "../DATA/DataProcess";
import '../components/styles.css'


export default function BoxProcess(){
   // const[view,setView]=useState(false);

    console.log(`${datiP[0].img}`);
    return(
        <Container fluid style={{ marginTop: 15 }}>
            <CardGroup style={{ margintTop: 50 }}>
                {datiP.map((datiP, index) => (
                    <Card border="light" key={index} className="boxProcess" style={{
                        width: '18rem', top: 0,
                        left: 0, position: 'relative', zIndex: 1, 
                    }}>
                        <Row style={{ justifyContent: 'right',marginTop:10}} >
                            <Badge border='dark' bg='' text="dark" className="point"
                                style={{ width: 25, height: 25, borderColor: 'black', borderRadius: 50, marginRight: '35%',top:'80%'}}>{datiP.id}</Badge></Row>
                        <Container className="imgMovie"
                        //style={{borderRadius:50,boxShadow:' 0px 5px 20px 10px rgba(0, 0, 0, 0.10)'}}
                         >
                        <Card.Img src={require('../img/icons/' + `${datiP.img}` + '.png')} className='colorText'
                            style={{
                                marginTop:'25%',
                                width: 63, heigth: 63,
                            }} /></Container>

                        <Card.Body>
                            <Card.Title>{datiP.header}</Card.Title>
                            <Card.Text>{datiP.text}
                            </Card.Text>
                        </Card.Body>
                    </Card>


                ))}
            </CardGroup>
        
        
        </Container>)
}