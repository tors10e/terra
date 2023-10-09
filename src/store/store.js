import React from 'react';
import ReactGA from "react-ga";

const Home = () => {
   ReactGA.pageview(window.location.pathname + window.location.search);
    return (
                <>
                <div className="container">
                    <a href="https://squareup.com/gift/K1DW0910BX83D/order">E-gift card </a>
                </div>
                </>
    );
};

export default Home;
