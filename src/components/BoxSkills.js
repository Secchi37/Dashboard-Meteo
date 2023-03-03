import React,{useState} from "react";
import { Card,Container, Row } from "react-bootstrap";
import { dataS } from "../DATA/DataSkills";
import '../components/styles.css'

export  default function BoxSkills(){
    const[view,setView]=useState(false);
    const[num,setNum]=useState(null); 
    return(
        <Container fluid style={{ 
            //background: 'traparent',
        paddingBottom:'20%',marginTop:'2%',marginLeft:'12%' }}>
            <Row xs={1} md={2} className="g-4" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
                {dataS.map((dataS, index) => (
                    <Card border="" key={index}                   
                    style={num===index?{ width: '18rem',backgroundColor: 'orangered'}:{ width: '18rem',backgroundColor: 'rgb(24,0,58)'}}
                    onMouseEnter={() => {  
                        console.log('dato',dataS.id[0]);
                        console.log('indice',index);                      
                       setNum(dataS.id[0])
                      }}
                      onMouseLeave={() => {setNum(null)}}
                >
                        {/* <a href={dataS.link} title={dataS.title}>{dataS.copy}</a> */}
                        <Card.Body>
                            <Card.Title style={{ color: 'white',fontSize:15 }}>{dataS.topTitle}</Card.Title>
                            <Card.Title style={{ color: 'white' }}>{dataS.header}</Card.Title>
                        </Card.Body>
                        <Card.Img src={require('../img/shape/shape-3.png')} key={index} 
                        style={num===index? { position: 'relative', zIndex: 1,marginLeft:'-5%'}:{ position: 'relative', zIndex: 1,marginLeft:'-5%',
                       filter:'invert(75%) sepia(43%) saturate(533%) hue-rotate(210deg) brightness(75%) contrast(125%)'}} />
                        <Card.Img src={require('../img/icons/' + `${dataS.img}` + '.png')} key={index} style={num===index? 
                            {                          
                                marginTop: '25%',
                                width: 63, heigth: 63,
                                filter: 'invert(64%) sepia(72%) saturate(3753%) hue-rotate(347deg) brightness(100%) contrast(102%)',
                                zIndex: 3,
                                position: 'absolute',
                                left: '10%',
                                bottom: '5%',                            
                            }
                            :{                          
                            marginTop: '25%',
                            width: 63, heigth: 63,
                            filter: 'invert(100%)',
                            zIndex: 3,
                            position: 'absolute',
                            left: '10%',
                            bottom: '5%',                            
                        }} />
                    </Card>
                ))}
            </Row>
        </Container>
    )
}