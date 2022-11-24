import React from 'react';
import Banner from "../components/banner";
import HomeAlerts from '../home/homeAlerts';
import Intro from '../home/intro';
import Hours from "../home/hours";
import Contact from "../home/contact";
import {Directions} from "../home/directions";
import Trails from "../home/hiking";
import Camping from "../home/camping";
import Wines from "../home/wines";
import Weather from "../home/weather";


const Home = () => {
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
                    <Camping />
                    <Wines />
                </div>
                </>
    );
};

export default Home;
