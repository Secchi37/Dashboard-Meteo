import React,{useState}from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import '../components/styles.css'

export default function FormContatti() {
const [nome,setNome]=useState('');
const [email,setEmail]=useState('');
const [oggetto,setOggetto]=useState('');
const [messaggio,setMessaggio]=useState('');

const handleSumit=(e)=>{
    e.preventDefault();
    console.log('nome: ',nome,'email: ', email,'oggetto: ', oggetto, 'messaggio: ', messaggio);
setNome('');
setEmail('');
setOggetto('');
setMessaggio('');
}

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
    "nome": nome,
  "email": email,
  "oggetto": oggetto,
  "messaggio": messaggio,
});

const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  const url='';

const Send=event=>{   
    fetch(url,requestOptions)
    .then((response) => (response.json()))
    .then((response)=> {
    if (response.status === 'success') {
      alert("Message Sent.");
      this.resetForm()
    } else if(response.status === 'fail') {
      alert("Message failed to send.")
    }
  })
}
    return (
        <Container fluid='sm' style={{ marginTop: '5%', borderRadius: '45', boxShadow: '0px 5px 20px 20px rgba(0, 0, 0, 0.10)', marginBottom: '5%' }}>
            <Form onSubmit={handleSumit}>
                <Row xs={1} md={2} style={{ marginLeft: '3%', marginRight: '3%' }}>
                    <Col style={{ marginTop: '3%', marginBottom: '4%' }}>
                        <Form.Group className="mb-3" controlId="Form.Nome">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                            <Form.Label className="formLabel">
                                Nome e Cognome
                            </Form.Label>
                            <Form.Control size='lg' type="text" placeholder="scrivi il nome qui"
                             value={nome} onChange={(e)=>setNome(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Form.Email" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>
                            <Form.Label className="formLabel">
                                Indirizzo Email</Form.Label>
                            <Form.Control size='lg' type="email" placeholder="email@dominio.com" 
                            value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Form.Oggetto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                            </svg>
                            <Form.Label className="formLabel">
                                Oggetto</Form.Label>
                            <Form.Control size='lg' type="text" placeholder="inserisci qui l'oggetto del messaggio" 
                            value={oggetto} onChange={(e)=>setOggetto(e.target.value)}/>
                        </Form.Group>
                    </Col>
                    <Col style={{ marginTop: '3%', marginBottom: '4%' }}>
                        <Form.Group className="mb-3" controlId="Form.Textarea">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-fonts" viewBox="0 0 16 16">
                                <path d="M12.258 3h-8.51l-.083 2.46h.479c.26-1.544.758-1.783 2.693-1.845l.424-.013v7.827c0 .663-.144.82-1.3.923v.52h4.082v-.52c-1.162-.103-1.306-.26-1.306-.923V3.602l.431.013c1.934.062 2.434.301 2.693 1.846h.479L12.258 3z" />
                            </svg>
                            <Form.Label className="formLabel">
                                Messaggio</Form.Label>
                            <Form.Control as="textarea" size='lg' rows={8} placeholder="scrivi qui la tua richiesta" 
                            value={messaggio} onChange={(e)=>setMessaggio(e.target.value)}/>
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="warning rounded-pill text-light" size="lg"  type="submint" onClick={Send}>
                              Invia
                            </Button>
                        </div>

                    </Col>
                </Row>
            </Form>
        </Container>
    )
}