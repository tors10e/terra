import React from 'react';
import ReactGA from "react-ga";

const Home = () => {
   ReactGA.pageview(window.location.pathname + window.location.search);
    return (
                <>
                <div className="container">
                    <p> placeholder</p>
                </div>
                </>
    );
};

export default Home;
