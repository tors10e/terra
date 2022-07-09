
function Href(props) {
    return React.createElement(
        "a",
        { href: props.link, target: "_blank" },
        props.text
    );
};

function EventAlertEven(props) {
    return React.createElement(
        "div",
        { "class": "topic" },
        React.createElement(
            "div",
            { "class": "alert alert-primary", role: "alert" },
            React.createElement(
                "h2",
                { "class": "cover-heading" },
                props.title
            )
        ),
        React.createElement(
            "p",
            { "class": "lead" },
            props.message
        )
    );
}

function EventAlertOdd(props) {
    return React.createElement(
        "div",
        { "class": "topic" },
        React.createElement(
            "div",
            { "class": "alert alert-secondary", role: "alert" },
            React.createElement(
                "h2",
                { "class": "cover-heading" },
                props.title
            )
        ),
        React.createElement(
            "p",
            { "class": "lead" },
            props.message
        )
    );
}

function EventAlerts() {
    return React.createElement(
        "div",
        null,
        React.createElement(EventAlertOdd, { title: "May 21st, 2022 - Live Music by High Lonesome",
            message: "High lonesome playing at the pavilion this Saturday. Welcome back Lisa and Philmer!" }),
        React.createElement(EventAlertEven, { title: "May 27 - 28th, 2022 - Private Event at the Pavilion",
            message: " Tastings will be held on the western hillside. Please bear with us while we expand and build our new tasting room." }),
        React.createElement(EventAlertOdd, { title: "May 29th, 2022 - Music by Jake Hicks", message: "Great music by Jake Hicks will be playing from 3 - 7 pm!" }),
        React.createElement(EventAlertEven, { title: "June 4th, 2022 - Music by High Lonesome", message: "We are looking forward to Kilmer and Lisa playing their fantastic music with us at the pavilion!" }),
        React.createElement(EventAlertOdd, { title: "June 5th, 2022 - Paint and sip event", message: "Details to follow." }),
        React.createElement(EventAlertEven, { title: "June 10th - 12th - Private Event at the Pavilion and Wildcraft Kitchen Foraging Tour",
            message: "Tastings will be held in the open on the western hillside, please bear with us while we expand and are\r building our new tasting room for additional capacity. Don't let that make you miss another one-of-a-kind foraging tour\r on Sunday the 12th with Wildcraft Kitchen!" })
    );
}

ReactDOM.render(React.createElement(EventAlerts, null), document.getElementById('event_alert_container'));