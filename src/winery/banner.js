import React from 'react';
import { Container, Image } from 'react-bootstrap';

export function Banner(props) {
    return (
        <Container id="banner">
            <Image src="/images/banners/snowy_vines.jpg" fluid className="bg-image d-flex justify-content-center align-items-center" />
        </Container>
    )
}

export default Banner;