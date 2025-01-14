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
import { Container, Col, Row, Image, Card } from 'react-bootstrap';
import Menu from './menu';
import {OverlayCard} from "../components/terra_card";


const Home = () => {
    ReactGA.send({ hitType: "pageview", page: "/home", title: "Home" });
    return (
            <Container>
                <Row>
                    <Header/>
                </Row>
                <Row>
                    <Banner/>
                </Row>
                <Row>
                <Col>
                    <OverlayCard card_image={PavilionGlow} card_title="WEDDINGS"/>
                </Col>
                <Col>
                    <OverlayCard card_image={NightVines} card_title="OVERNIGHTING"/> 
                </Col>
                <Col>
                    <OverlayCard card_image={DiningOut} card_title="EVENTS"/>
                </Col>
                </Row>
                <Row>
                    <Col>
                        <OverlayCard card_image={GreenGrapes} card_title="WINERY"/>
                    </Col>
                    <Col>
                        <OverlayCard card_image={SunsetRidge} card_title="TRAILS"/>
                    </Col>
                    <Col>
                    <OverlayCard card_image={MountainFog} card_title="PHOTO GALLERY"/>
                    </Col>
                </Row>
                <Row>
                    <Footer/>
                </Row>
            </Container>
    );
};

export default Home;
