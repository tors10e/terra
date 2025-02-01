import React from 'react';
import banner_image from "../images/banners/UncorkYourSenseOfAdventure_2000x1290.jpg";
import {OverlayCard} from "../components/card";
import { Container, Col, Row, Image, Card } from 'react-bootstrap';

export function Banner(props) {
    return (
        <Container id="banner">
            <div class="pb-2">
                <div id="banner-text" class="top"><h1>UNCORK YOUR SENSE OF ADVENTURE.</h1></div>
                <img src={banner_image} alt="Sunset View" className="border border-light rounded"/>
            </div>
        </Container>
    )
}

export default Banner;