import React from 'react';
import banner_image from "../images/banners/UncorkYourSenseOfAdventure_2000x1290.jpg";


function Banner(props) {
    return (
        <img src={banner_image} alt="Sunset View" className="border border-light rounded"/>
    )
}

export default Banner;