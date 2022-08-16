import React from 'react';
import Banner from "../components/banner";
// import HomeAlerts from '../home/homeAlerts';
import Intro from '../home/intro';
import Hours from "../home/hours";
import Contact from "../home/contact";
import Directions from "../home/directions";
import Trails from "../home/hiking";
import Camping from "../home/camping";
import WineModal from "../home/wine_modal";


const Home = () => {
    return (
        <div>
            <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
               {/*<HomeAlerts/>*/}
                <Banner />
                <Intro />
                <Hours />
                <Contact />
                <Directions />
                <Trails />
                <Camping />
                <WineModal />
            </div>
        </div>
    );
};

export default Home;
