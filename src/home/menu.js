import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';

export function Menu(props) {
    return (
        <div>
            <Row>
                <Col>
                    <Image src={PavilionGlow} rounded />
                </Col>
                <Col>
                    <Image src={PavilionGlow} rounded />
                </Col>
                <Col>
                    <Image src={PavilionGlow} rounded />    
                </Col>
            </Row>
            <Row>
                <Col>
                    <Image src={PavilionGlow} rounded />
                </Col>
                <Col>
                    <Image src={PavilionGlow} rounded />
                </Col>
                <Col>
                    <Image src={PavilionGlow} rounded />
                </Col>
            </Row>
        </div>
    );
}

