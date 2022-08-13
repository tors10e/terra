import React from 'react';
import aerial_sunset_2000 from '../images/aerial_sunset_2000.jpg'
import Navbar from "../navbar";

const Home = () => {
    return (
        <div>
            <div className="cover-container d-flex w-100 h-100 mx-auto flex-column">
                <header className="mb-auto">
                    <Navbar/>
                    <img src={aerial_sunset_2000} alt="Aerial Sunset View"/>
                </header>
            </div>
        </div>
    );
};

export default Home;
