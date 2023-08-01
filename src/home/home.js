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
import ReactGA from "react-ga";

const Home = () => {
   ReactGA.pageview('home');
    return (
                <>
                <HomeAlerts />
                <Banner />
                <div className="container">
                    <Intro />
                    <Hours />
                    <Weather />
                    <Contact />
                    <Directions />
                    <Trails />
                    <Wines />
                </div>
                </>
    );
};

export default Home;
