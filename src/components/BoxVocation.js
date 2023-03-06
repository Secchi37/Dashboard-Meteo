import React, { useState } from "react";
import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import { vocation } from "../DATA/DataVocation";
import { mission } from "../DATA/DataVocation";
import { vision } from "../DATA/DataVocation";
import { value } from "../DATA/DataVocation";

export default function BoxVocation() {
    const [title, setTitle] = useState(mission[0].title);
    const [header, setHeader] = useState(mission[0].header);
    const [text, setText] = useState(mission[0].text);
    const [punti, setPunti] = useState(mission[0].punti);
    const [colorM, setColorM] = useState(true);
    const [colorVi, setColorVi] = useState(false);
    const [colorVa, setColorVa] = useState(false);

    const changeText = (param) => {
        switch (param) {
            case 'mission': {
                setTitle(mission[0].title);
                setHeader(mission[0].header);
                setText(mission[0].text);
                setPunti(mission[0].punti);
                setColorM(true);
                setColorVi(false);
                setColorVa(false);

                break;
            }
            case 'vision': {
                setTitle(vision[0].title);
                setHeader(vision[0].header);
                setText(vision[0].text);
                setPunti(vision[0].punti);
                setColorVi(true);
                setColorVa(false);
                setColorM(false);
                break;
            }
            case 'value': {
                setTitle(value[0].title);
                setHeader(value[0].header);
                setText(value[0].text);
                setPunti(value[0].punti);
                setColorVa(true);
                setColorM(false);
                setColorVi(false);
                break;
            }
            default: {
                setTitle(mission[0].title);
                setHeader(mission[0].header);
                setText(mission[0].text);
                setPunti(mission[0].punti);
                setColorM(true);
                setColorVi(false);
                setColorVa(false);
            }
        };
    }


    return (
        <Container fluid style={{ marginTop: 50, marginLeft: 25 }}>
            <Row fluid>
                <Col sm={4}>
                    <p>{title}</p>
                    <h1 style={{ marginBottom: 15 }}>{header}</h1>
                    <Image
                        // className="d-block mx-auto img-fluid" 
                        alt='alt' src={require("../img/icons/decor-1.png")} />
                    <p style={{ marginTop: 15 }}>{text}</p>
                    {punti.map((punti, index) => (
                        <ul>{punti === '' ? null : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="orangered" class="bi bi-bullseye" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                            <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                        </svg>}

                            <il style={{ marginLeft: 10 }}>{punti}</il></ul>))}
                </Col>
                <Col sm={7}>
                    <Image alt="vocation" src={require("../img/background/video-1.jpg")} style={{width:'100%',heigth:'100%'}} />
                    <ListGroup horizontal style={{ boxShadow: ' 0px 5px 20px 10px rgba(0, 0, 0, 0.10)' }}>
                        <ListGroup.Item action onClick={() => changeText('mission')} onMouseEnter={() => { setColorM(true) }} onMouseLeave={() => { title === mission[0].title ? setColorM(true) : setColorM(false) }}
                            style={!colorM ? { borderBottonColor: 'currentColor' } : { borderBottomColor: 'orangered', borderBottomWidth: 5 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={!colorM ? 'currentColor' : 'orangered'} stroke={!colorM ? null : 'orangered'} class="bi bi-check2-circle" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                            </svg>  <il style={{ marginLeft: 10 }}>{vocation[0]}</il>
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => changeText('vision')} onMouseEnter={() => { setColorVi(true) }} onMouseLeave={() => { title === vision[0].title ? setColorVi(true) : setColorVi(false) }}
                            style={!colorVi ? { borderBottonColor: 'currentColor' } : { borderBottomColor: 'orangered', borderBottomWidth: 5 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={!colorVi ? 'currentColor' : 'orangered'} stroke={!colorVi ? null : 'orangered'} class="bi bi-check2-circle" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                            </svg>
                            <il style={{ marginLeft: 10 }}>{vocation[1]}</il>
                        </ListGroup.Item>
                        <ListGroup.Item action onClick={() => changeText('value')} onMouseEnter={() => { setColorVa(true) }} onMouseLeave={() => { title === value[0].title ? setColorVa(true) : setColorVa(false) }}
                            style={!colorVa ? { borderBottonColor: 'currentColor' } : { borderBottomColor: 'orangered', borderBottomWidth: 5 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill={!colorVa ? 'currentColor' : 'orangered'} stroke={!colorVa ? null : 'orangered'} class="bi bi-check2-circle" viewBox="0 0 16 16">
                                <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                            </svg>
                            <il style={{ marginLeft: 10 }}>{vocation[2]}</il>

                        </ListGroup.Item>

                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}