import React from 'react';
import Banner from "../components/banner";
import Footer from "./footer";
import Header from "./header";

import GreenGrapes from "../images/green_grapes_800x540.jpg";
import SunsetRidge from "../images/sunset_ridge_800x541.jpg";
import MountainFog from "../images/foggy_mtns_800x537.jpg";
import PavilionGlow from "../images/event_photos/pavilion_glow.jpg";
import DiningOut from "../images/dining_out_800x531.jpg";
import NightVines from "../images/night_vines_800.jpg";


import ReactGA from "react-ga4";
import { Container, Col, Row, Image } from 'react-bootstrap';
import Menu from './menu';


const Home = () => {
    ReactGA.send({ hitType: "pageview", page: "/home", title: "Home" });
    return (
            <Container>
                <Row>
                    <Header/>
                </Row>
                <Row><Banner/></Row>
                <Row>
                <Col>
                    <Image src={PavilionGlow} rounded />
                </Col>
                <Col>
                    <Image src={NightVines} rounded />
                </Col>
                <Col>
                    <Image src={DiningOut} rounded />    
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={GreenGrapes} rounded />
                </Col>
                <Col>
                    <Image src={SunsetRidge} rounded />
                </Col>
                <Col>
                    <Image src={MountainFog} rounded />
                </Col>
            </Row>
                <Row>
                    <Footer/>
                </Row>
            </Container>
    );
};

export default Home;
