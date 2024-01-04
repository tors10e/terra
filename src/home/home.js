import React from 'react';
import Banner from "../components/banner";
import HomeAlerts from '../home/homeAlerts';
import Intro from '../home/intro';
import Hours from "../home/hours";
import Contact from "../home/contact";
import {Directions} from "../home/directions";
import Trails from "../home/hiking";
import Wines from "../home/wines";
import Weather from "../home/weather";
import FacebookFeed from "../components/facebook";
import Subscribe from "../home/subscribe";

import ReactGA from "react-ga4";


const Home = () => {
    ReactGA.send({ hitType: "pageview", page: "/home", title: "Home" });
    return (
                <>
                <HomeAlerts />
                <Banner />
                <div className="container">
                    <Intro />
                    <FacebookFeed />
                    <Hours />
                    <Weather />
                    <Contact />
                    <Directions />
                    <Trails />
                    <Wines />
                    <Subscribe />
                </div>
                </>
    );
};

export default Home;
