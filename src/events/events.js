import React from 'react';
import {EventAlerts} from '../events/event_alert';
import ReactGA from "react-ga4";

const Events = () => {
    ReactGA.send({ hitType: "pageview", page: "/home", title: "Home" });
    return (
        <div>
            <EventAlerts />
        </div>
    );
};

export default Events;