import React,{useState} from "react";
import { Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import '../components/styles.css'



export default function NavBar() {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/dashboard",
      text: "Dashboard",
    },
  ];
  const [fix,setFix]=useState(false);
 

  function activeScroll(){   
    console.log(window.scrollY);
    if(window.scrollY>600){
      setFix(true)     
    }else{
      setFix(false)    
    }
  };
  
  window.addEventListener("scroll",activeScroll);
//fix? {backgroundColor:'red'}:{backgroundColor:'green'}
//style={fix? {position:"sticky", top:40}:{position:"top"}}
  return (
    <div style={fix? {position:"sticky", top:0,zIndex:1000}:{position:"top"}}>   
    <Navbar
    bg={fix? "white":null} 
    expand="lg"    
    >
      <Container>
      <Col style={fix?{marginLeft:90}:{marginLeft:65}}>
      <Nav href="/" className="flex-grow-1 pe-3">       
          <div className="logo-NavBar">
          <Image alt="logo widata" src={fix?require("../img/shape/logo_widata.png"):require("../img/shape/logo_widata_sx.png")} 
          style={fix? {width: 'auto', height: 38,}:{width: 'auto',height: 48,}}/>            
          </div>
        </Nav>
        </Col>
         <Col>
         {fix?null:<Nav className="justify-content-end">
         <span className="border-bottom border-dark">
           <Row xs="auto">
             <Col><Nav.Link href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="fuchsia" class="bi bi-headphones" viewBox="0 0 16 16">
               <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5z" />
             </svg></Nav.Link></Col>
             <Col><Nav.Link style={{ fontWeight: 'bold'}} href="#">Contact us</Nav.Link></Col>
             <Col><Nav.Link  style={{ fontWeight: 'bold'}} href="#">info@widata.cloud</Nav.Link></Col>
             <Col><Nav.Link href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-linkedin" viewBox="0 0 16 16">
               <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
             </svg></Nav.Link></Col>
             <Col><Nav.Link style={{ fontWeight: 'bold'}} href="#">IT</Nav.Link></Col>
             <Col><Nav.Link style={{ fontWeight: 'bold'}} href="#">EN</Nav.Link></Col>
           </Row>
         </span>
       </Nav>}
          
          <Navbar.Toggle aria-controls="navbarScroll"/>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="justify-content-end flex-grow-1 pe-3" >
              {links.map((link) => {
                return (
                  <Nav.Link style={{ fontWeight: 'bold'}} href={link.path}>{link.text}</Nav.Link>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>   
    </div>
  );
}
