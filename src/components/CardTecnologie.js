import React from "react";
import { Card, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import '../components/styles.css'



export default function CardTecnologie(props){
   const dataCard=props.dataCard
    return(
        <Container fluid style={{marginTop:10,marginLeft:25}}>
        <Row xs={1} md={2} className="g-4"
        //style={{textAlign:'center'}}
        >        
        {dataCard.map((dataCard,index)=>(
            
            <Card
             border="light" key={index}  className="tec" style={{ width: '18rem'}}>
            {/* <a href={dataCard.link} title={dataCard.title}>{dataCard.copy}</a> */}
            <Card.Body >
            <Card.Title style={{marginTop:50}}>{dataCard.titleCard}</Card.Title>
           
            <Container fluid            
            style={{width:100,height:100,justifyContent:'center',paddingTop:15,backgroundColor:'white',borderRadius:50,boxShadow:' 0px 5px 20px 10px rgba(0, 0, 0, 0.10)'}}
                   >
            <Card.Img src={require('../img/icons/'+`${dataCard.img}`+'.png')} 
            style={{width:50,heigth:50, marginTop:10, pointerEvents:"none",
            filter:'invert(64%) sepia(72%) saturate(3753%) hue-rotate(347deg) brightness(100%) contrast(102%)'}} />
            </Container>
           
            <Card.Text style={{marginTop:15,pointerEvents:"none"}}>{dataCard.text}</Card.Text>
            
            </Card.Body>
            </Card>  
          ))}           
          </Row>
          </Container>
    )
}