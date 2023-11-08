import React from 'react';
import WarrenMillerBanner from "./warren_banner";
import WarrenMillerIntro from './warren_miller_intro';

import ReactGA from "react-ga4";

const WarrenMiller = () => {
    ReactGA.send({ hitType: "pageview", page: "/events/warren-miller", title: "Warren Miller" });
    return (
                <>
                <WarrenMillerBanner />
                <div className="container">
                    <WarrenMillerIntro />
                </div>
                </>
    );
};

export default WarrenMiller;
