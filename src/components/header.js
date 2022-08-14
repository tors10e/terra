import React from 'react';
import Navbar from "../components/navbar";
import Banner from "../components/banner";

function Header(props) {
    return (
        <header className="mb-auto">
            <Navbar/>
            <Banner/>
        </header>
    )
}

export default Header;