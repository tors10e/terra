import React from 'react';
import Image from 'react-bootstrap/Image';
import Wedding_Banner from "./wedding_pricing_banner";
import Header from '../components/header';
import NavBar from "../components/navbar";
import ReactGA from "react-ga4";
import { Container, Row, Col } from 'react-bootstrap';
import { WeddingMenu } from './wedding_menu';
import WeddingsIframeComponent from '../components/weddings/wedding_iframe';
import WeddingPricingPamphlet from "../images/wedding_pricing_pamphlet.png";
import CeremonyRock from "../images/event_photos/ceremony_rock.jpg";

const Weddings = () => {
    ReactGA.send({ hitType: "pageview", page: "/weddings", title: "Weddings" });
    return (
            <Container>
                <Row>
                    <Header/>
                </Row>
                <Row class="navbar">
                    <NavBar />
                </Row>
                <Row>
                    <Wedding_Banner/>
                </Row>
                <Row></Row>
                <Row>
                    <Col> <Image src={WeddingPricingPamphlet}/> </Col>
                    <Col><WeddingsIframeComponent/></Col>
                    <Col></Col>
                </Row>
            </Container>
    );
};

export default Weddings;
