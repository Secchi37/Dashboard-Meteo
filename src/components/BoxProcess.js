import React, { useState } from "react";
import { Badge, Card, CardGroup, Container, Row } from "react-bootstrap";
import { datiP } from "../DATA/DataProcess";
import '../components/styles.css'



export default function BoxProcess(){
    const[view,setView]=useState('light');
    const[num,setNum]=useState(null); 

  
    return(
        <Container fluid style={{ marginTop: '3%' }}>
            <CardGroup>            
                {datiP.map((datiP, index) => (
                    <Card border="light" key={index} className="boxProcess" style={{
                        width: '18rem', top: 0,
                        left: 0, position: 'relative', zIndex: 1, 
                    }}>
                     {/* <a href={datiP.link} title={datiP.title}>{datiP.copy}</a> */}
                        <Row style={{ justifyContent: 'right',marginTop:10}} >
                        
                        <Badge bg={num===index? view:'ligth'} text="dark" key={index} pill
                        style={{border:'1px solid rgba(0, 0, 0, 0.25)',borderWidth:'100%', width: 25, height: 25, borderRadius: '80%', marginRight: '35%',top:'80%'}}
                        >{datiP.id}</Badge>                            
                                </Row>
                        <Container className="imgMovie" key={index}
                        onMouseEnter={() => {  
                            console.log('dato',datiP.id[0]-1);
                            console.log('indice',index+1);

                           setView('warning');
                           setNum(datiP.id[0]-1)
                          }}
                          onMouseLeave={() => {                            
                            setView('ligth');
                            setNum(null)        
                                                   
                         }}
                        //style={{borderRadius:50,boxShadow:' 0px 5px 20px 10px rgba(0, 0, 0, 0.10)'}}
                         >
                        <Card.Img src={require('../img/icons/' + `${datiP.img}` + '.png')} className={num===index? 'colorText1':'colorText'}
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