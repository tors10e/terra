import React from 'react';
import { Container, Col, Row, Image, ListGroupItem } from 'react-bootstrap';
import { OverlayCard, ClickableOverlayCard, TerraCard } from '../components/card';
import ListGroup from 'react-bootstrap/ListGroup'

import GreenGrapes from "../images/green_grapes_800x540.jpg";
import SunsetRidge from "../images/sunset_ridge_800x541.jpg";
import MountainFog from "../images/foggy_mtns_800x537.jpg";
import PavilionGlow from "../images/pavilion_glow_800x540.jpg";
import DiningOut from "../images/dining_out_800x531.jpg";
import NightVines from "../images/night_vines_800.jpg";
import BRSunset from "../images/event_photos/br_sunset.jpg";
import SunKiss from "../images/event_photos/SunKiss.jpg";
import DJLights from "../images/event_photos/DjLights.jpg";
import BloodMtnDinner from "../images/event_photos/BloodMtnDinner.jpg";
import CeremonyRock from "../images/event_photos/ceremony_rock.jpg";
import BrianEmilyVows from "../images/event_photos/brian_emily_vows_2000px.jpg";
import Badge2021 from '../images/wedding-rule-badge-2021 - high resolution.png';

export function WeddingMenu(props) {
    return (
    <div>
        <Container>
            <Row>
                <Col id="centered-grid-content">
                   <ListGroup>
                    <ListGroupItem>2024 Best of GA Regional winner Wedding Venues for the GBJ</ListGroupItem>
                    <ListGroupItem>2023 Best of Georgia Regional winner in the Wedding Venues for the GBJ</ListGroupItem>
                    <ListGroupItem>Chosen Weddiing Rule's Atlanta's Top 10 Winery Wedding Venues in 2022!</ListGroupItem>
                    <ListGroupItem>Chosen Weddiing Rule's Atlanta's Top 10 Winery Wedding Venues in 2021!</ListGroupItem>
                   </ListGroup>
                </Col>
                <Col>   <a id="myInput" target="_blank" rel="noopener"
                    href="https://www.weddingrule.com/winery-wedding-venues/georgia/atlanta">
                    <img width="250px" height="250px" src={Badge2021}></img>
                </a>
                <a id="myInput" target="_blank" rel="noopener"
                    href="https://www.weddingrule.com/winery-wedding-venues/georgia/atlanta">
                    <img width="250px" height="250px" src="https://www.weddingrule.com/wp-content/uploads/2022/05/wedding-rule-badge-2022-1.png"></img></a> </Col>
            </Row>
            <Row>
                <Col id="centered-grid-content">
                    Our tranquil 120 acre mountain farm is completely surrounded by thousands of acres of the Chattahoochee National Forest and offers year-round mountain views of the highest peaks of Nantahalla National Forest.
                </Col>
                <Col> <OverlayCard card_image={CeremonyRock} /> </Col>
            </Row>
            <Row>
                <Col> <OverlayCard card_image={SunKiss}/> </Col>
                <Col id="centered-grid-content">We are a welcoming venue that accommodates ceremonies for traditional and non-traditional weddings with a wide range of budgets that appeal to nearly any couple.</Col>
            </Row>
            <Row>
                <Col id="centered-grid-content">We are here to help make your vision a reality! OUr 2,000 ft2 pavilion is a blank canvas that awaits your imagination. We have an extensive list of vendorsthat offer and array of services that you can choose from or bring you own!</Col>
                <Col> <OverlayCard card_image={DJLights}/> </Col>
            </Row>
            <Row>
                <Col> <OverlayCard card_image={BrianEmilyVows}/> </Col>
                <Col id="centered-grid-content">With a limited amount of weddings per year, we eliminate the production line feeling, ensuring an exclusive event and treasured memory for you and your spouse.</Col>   
            </Row>
        </Container>
    </div>
    );
}

export default WeddingMenu;