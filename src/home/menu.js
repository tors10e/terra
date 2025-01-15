import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import { OverlayCard } from '../components/terra_card';

import GreenGrapes from "../images/green_grapes_800x540.jpg";
import SunsetRidge from "../images/sunset_ridge_800x541.jpg";
import MountainFog from "../images/foggy_mtns_800x537.jpg";
import PavilionGlow from "../images/pavilion_glow_800x540.jpg";
import DiningOut from "../images/dining_out_800x531.jpg";
import NightVines from "../images/night_vines_800.jpg";

export function Menu(props) {
    return (
    <div>
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
                    </div>
    );
}

export default Menu;