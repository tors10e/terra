import React from 'react';
import Wedding_Banner from "./wedding_banner";
import Header from "./header";
import NavBar from "../components/navbar";

import ReactGA from "react-ga4";
import { Container, Row } from 'react-bootstrap';
import { WeddingMenu } from './wedding_menu';




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
                <Row>
                    <WeddingMenu/>
                </Row>
                <Row>
                </Row>
            </Container>
    );
};

export default Weddings;
