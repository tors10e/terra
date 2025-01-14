import React from 'react';
import Banner from "../components/banner";
import {Footer} from "./footer";

import PavilionGlow from "../images/event_photos/pavilion_glow.jpg"

import ReactGA from "react-ga4";
import { Container, Col, Row, Image } from 'react-bootstrap';


const Home = () => {
    ReactGA.send({ hitType: "pageview", page: "/home", title: "Home" });
    return (
            <Container>
                <Row></Row>
                <Row><Banner/></Row>
                <Row>
                    <Col>
                        <Image src={PavilionGlow} rounded />
                    </Col>
                    <Col>
                        <Image src={PavilionGlow} rounded />
                    </Col>
                    <Col>
                        <Image src={PavilionGlow} rounded />    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Image src={PavilionGlow} rounded />
                    </Col>
                    <Col>
                        <Image src={PavilionGlow} rounded />
                    </Col>
                    <Col>
                        <Image src={PavilionGlow} rounded />
                    </Col>
                </Row>
                <Row>
                    <Footer/>
                </Row>
            </Container>
    );
};

export default Home;
