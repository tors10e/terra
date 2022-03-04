import React from 'react';
import PrimaryAlert from 'common/Alert/PrimaryAlert';

function HomeAlerts() {
    return React.createElement(
        'div',
        null,
        React.createElement(PrimaryAlert, {
            text: React.createElement(
                'a',
                { href: './chefs_dinner.html' },
                'Winter Wonderland chef\'s dinner scheduled for January 29th, 2022 - get your tickets now only a few left!'
            )
        }),
        React.createElement(DangerAlert, { text: 'Closed for the season except for special events.' })
    );
}

ReactDOM.render(React.createElement(Alerts, null), document.getElementById('alert_container'));