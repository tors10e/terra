import React from "react";
import SecondaryAlert from '../components/alerts';


function HomeAlerts() {
    return (
<>
            <SecondaryAlert
                text={<a href="/events">See our events page for upcoming events including when
                    private events require us to use the western hillside for tastings.</a>}/>
</>
    );
};

export default HomeAlerts;