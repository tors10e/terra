import React from "react";
import {PrimaryAlert, SecondaryAlert}  from '../components/alerts';
import events from '../events/list_of_events';
import CurrentEvents from '../components/utilities';


// This pulls the first event from list_of_events and displays it on the homepage to get attention.
//todo: make it so that we pull the closest event in the future instead of the first event.

function HomeAlerts() {
    return (
<>
            <PrimaryAlert
                text={
                    <a href="/events">{events[0][0]} - {events[0][1]}</a>}
                />
</>
    );
};

export default HomeAlerts;