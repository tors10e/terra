import React from "react";
import {PrimaryAlert, SecondaryAlert}  from '../components/alerts';
import {CurrentEvents} from '../components/utilities';


// This pulls the first event from list_of_events and displays it on the homepage to get attention.
//todo: make it so that we pull the closest event in the future instead of the first event.

function HomeAlerts() {
    const current_events = CurrentEvents();
    return (
<>
            <PrimaryAlert
                text={
                    <a href="/events">{current_events[0][0]} - {current_events[0][1]}</a>}
                />
</>
    );
};

export default HomeAlerts;