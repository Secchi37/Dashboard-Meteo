import React,{useState} from "react";
import { Row,Col, Container } from "react-bootstrap";
import '../components/styles.css';

export default function Footer(){
  const[viewT,setViewT]=useState(false); 
  const[viewP,setViewP]=useState(false); 
  const[viewC,setViewC]=useState(false); 
  const[viewA,setViewA]=useState(false); 
  const[viewR,setViewR]=useState(false); 
  const[viewI,setViewI]=useState(false); 
  const[viewPV,setViewPV]=useState(false);
  const[viewL,setViewL]=useState(false); 
  const[viewE,setViewE]=useState(false);  



  const handleClickScroll = (param) => {
    const element = document.getElementById(param);
    if (element) {
      console.log(param);
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth',block: "end", inline:"nearest" });
    } 
  };

 

    return(
        <div className='footer'>
            <Container style={{paddingTop:'15%'}}>
                <Row xs={1} md={2} lg={6}>
                    <Col sm style={{color:'white'}}>
                        <p><h4 >Info:</h4></p>
                        <ul style={{ listStyleType:'none',margin: 0, padding: 0}}>
                            <li
                            style={viewT?{color: 'white' }:{color:'grey'}}
                            onMouseEnter={() => {
                              setViewT(true);   
                            }}
                            onMouseLeave={() => {           
                              setViewT(false);
                             }}
                            onClick={()=>handleClickScroll('tecnologie')}>
                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                          </svg>Tecnologie</h6></li>
                          <li
                          style={viewP?{color: 'white' }:{color:'grey'}}
                            onMouseEnter={() => {
                              setViewP(true);   
                            }}
                            onMouseLeave={() => {           
                              setViewP(false);
                             }}
                          onClick={()=>handleClickScroll('processo')}>
                          <h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>Processo produttivo</h6></li>
                        <li
                        style={viewC?{color: 'white' }:{color:'grey'}}
                            onMouseEnter={() => {
                              setViewC(true);   
                            }}
                            onMouseLeave={() => {           
                              setViewC(false);
                             }}
                        >
                        <h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                      </svg>Chi siamo</h6></li>
                      </ul></Col>
                          
                          <Col style={{color:'white'}}>
                        <p><h4 >Services:</h4></p>
                        <ul style={{ listStyleType:'none',margin: 0, padding: 0}}>
                            <li
                            style={viewA?{color: 'white' }:{color:'grey'}}
                            onMouseEnter={() => {
                              setViewA(true);   
                            }}
                            onMouseLeave={() => {           
                              setViewA(false);
                             }}
                            >
                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                          </svg>Analsi dati di Mobilità</h6></li>
                          <li
                          style={viewR?{color: 'white' }:{color:'grey'}}
                            onMouseEnter={() => {
                              setViewR(true);   
                            }}
                            onMouseLeave={() => {           
                              setViewR(false);
                             }}
                          >
                          <h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>Raccolta dati IoT</h6></li>
                        <li
                        style={viewI?{color: 'white' }:{color:'grey'}}
                            onMouseEnter={() => {
                              setViewI(true);   
                            }}
                            onMouseLeave={() => {           
                              setViewI(false);
                             }}
                        >
                        <h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                      </svg>Insights</h6></li>                         
                          </ul></Col>
                          
                          
                          <Col sm style={{ color: 'white' }}><p><h4>Supporto:</h4></p>
                        <ul style={{ listStyleType:'none', margin: 0, padding: 0}}>
                            <li  
                            style={viewPV?{color: 'white' }:{color:'grey'}}
                            onMouseEnter={() => {
                              setViewPV(true);   
                            }}
                            onMouseLeave={() => {           
                              setViewPV(false);
                             }}>
                            <h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                          </svg>Privacy Policy</h6></li>
                          <li
                          style={viewL?{color: 'white' }:{color:'grey'}}
                            onMouseEnter={() => {
                              setViewL(true);   
                            }}
                            onMouseLeave={() => {           
                              setViewL(false);
                             }}
                          >
                          <h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" stroke="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                          </svg>Lavora con noi</h6></li>
                          </ul>
                          </Col>
                          <Col sm style={{ color: 'white' }}>
                        <p><h4>Contatti</h4></p>
                        <ul style={{ listStyleType:'none',margin: 0, padding: '5%'}}>
                            <li
                            style={viewE?{color: 'white' }:{color:'grey'}}
                            onMouseEnter={() => {
                              setViewE(true);   
                            }}
                            onMouseLeave={() => {           
                              setViewE(false);
                             }}
                            ><h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>  info@widata.cloud</h6></li>
                          <li
                          style={{color:'grey'}}
                          ><h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-europe-africa" viewBox="0 0 16 16">
                          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.809.809 0 0 1 1.034-.275.809.809 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34c.078.028.16.044.243.054.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.333.333 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501Z"/>
                        </svg>   Via S Mocci 52, Sassari (SS), Italia</h6></li>
                        <li  style={{color:'grey'}}>
                        <h6><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bank" viewBox="0 0 16 16">
                        <path d="m8 0 6.61 3h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.38l.5 2a.498.498 0 0 1-.485.62H.5a.498.498 0 0 1-.485-.62l.5-2A.501.501 0 0 1 1 13V6H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 3h.89L8 0ZM3.777 3h8.447L8 1 3.777 3ZM2 6v7h1V6H2Zm2 0v7h2.5V6H4Zm3.5 0v7h1V6h-1Zm2 0v7H12V6H9.5ZM13 6v7h1V6h-1Zm2-1V4H1v1h14Zm-.39 9H1.39l-.25 1h13.72l-.25-1Z"/>
                      </svg>   P.IVA 02831720905</h6></li></ul></Col>                         
                </Row>
                <div style={{borderTop: '1px solid grey',marginTop:'5%',paddingBottom:'1%'}}>
                <Row style={{ color: 'white',marginTop:'2%'}}>
                <Col style={{color:'grey'}}><h5>Copyright</h5></Col>
                <Col style={{textAlign:'right',color:'grey'}}><h5>Privacy Policy</h5></Col>
              </Row>
                </div>
                </Container>


        </div>
    )
}