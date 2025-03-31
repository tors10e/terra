import React from 'react';
import banner_image from "../images/banners/UncorkYourSenseOfAdventure_2000x1290.jpg";
import {OverlayCard} from "../components/card";
import { Container, Col, Row, Image, Card } from 'react-bootstrap';

export function Banner(props) {
    return (
        <Container id="banner">
            <div class="bg-image d-flex justify-content-center align-items-center">
                <h1 class="text-white">UNCORK YOUR SENSE OF ADVENTURE</h1>
            </div>
        </Container>
    )
}

export default Banner;