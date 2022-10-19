import React from "react";
import {PrimaryAlert, SecondaryAlert}  from '../components/alerts';

function HomeAlerts() {
    return (
<>
            <PrimaryAlert
                text={<a href="/events">See our events page for upcoming events including when
                    private events require us to use the western hillside for tastings.</a>}/>
</>
    );
};

export default HomeAlerts;