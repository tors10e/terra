import React from "react";
import {PrimaryAlert, SecondaryAlert}  from '../components/alerts';

function HomeAlerts() {
    return (
<>
            <PrimaryAlert
                text={
                    <a href="/events">We are back in the East Ridge Pavilion and operations are back to normal!</a>}
                />
</>
    );
};

export default HomeAlerts;