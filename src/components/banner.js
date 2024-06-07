import React from 'react';
import banner_image from "../images/banners/aerial_roundhouse_2000.jpg";


function Banner(props) {
    return (
        <img src={banner_image} alt="Aerial Sunset View" class="border border-light rounded"/>
    )
}

export default Banner;