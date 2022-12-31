import React from "react";
import {PrimaryAlert, SecondaryAlert}  from '../components/alerts';
import alert_text from './alert_text';


function HomeAlerts() {
    return (
<>
            <PrimaryAlert
                text={
                    <a href="/events">{alert_text}</a>}
                />
</>
    );
};

export default HomeAlerts;