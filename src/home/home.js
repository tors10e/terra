import React from 'react';
import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";
import NavBar from "../components/navbar";

import ReactGA from "react-ga4";
import { Container, Col, Row, Image, Card } from 'react-bootstrap';
import Menu from './menu';



const Home = () => {
    ReactGA.send({ hitType: "pageview", page: "/home", title: "Home" });
    return (
            <Container>
                <Row>
                    <Header/>
                </Row>
                <Row>
                    <NavBar/>
                </Row>
                <Row>
                    <Banner/>
                </Row>
                <Row>
                    <Menu/>
                </Row>
                <Row>
                    <Footer/>
                </Row>
            </Container>
    );
};

export default Home;
