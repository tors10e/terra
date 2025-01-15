import React from 'react';
import {Col, Row, Image} from 'react-bootstrap';

import logo from "../images/logo_bw_text.png";

function Header(props) {
    return (
        <Row >
            <Col></Col>
            <Col>
                <Image src={logo} class="m-4"/>
            </Col>
            <Col></Col>
        </Row>
    );
}

export default Header;