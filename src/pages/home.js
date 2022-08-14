import React from 'react';
import Banner from "../components/banner";
// import HomeAlerts from '../home/homeAlerts';
import Intro from '../home/intro';
import Hours from "../home/hours";
import Contact from "../home/contact";


const Home = () => {
    return (
        <div>
            <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
               {/*<HomeAlerts/>*/}
                <Banner />
                <Intro />
                <Hours />
                <Contact />

            </div>
        </div>
    );
};

export default Home;
