import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

export function Footer(props) {
    return (
        <Row>
            <Col>
                    <h5 class="footer-heading">LOCATION:</h5>
                    <p>1821 VANDIVER MTN RD</p>
                    <p>CLARKSVILLE, GA 30523</p>

                    <p>Latitude: 34 43' 46.8588"</p>
                    <p>Longitude: -83 29' 51.6228"</p>
            </Col>
            <Col>
                <h5 class="footer-heading">HOURS:</h5>
                <p class="font-weight-bold">MARCH - NOVEMBER</p>
                <p>Friday, Saturday, Sunday, Monday</p>
                <p>12:30-9:00PM</p>

                <p class="footer-subheading">DECEMBER-FEBRUARY</p>
                <p>Saturday, Sunday</p>
                <p>12:30-7:00PM</p>
            </Col>
            <Col>
                <h5 class="footer-heading">CONTACT:</h5>
                <p>info@terraincognitavineyard.com</p>
                <p>(828) 482-7382</p>
            </Col>
        </Row>
    );
}

export default Footer;