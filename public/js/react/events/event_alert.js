
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
        React.createElement(EventAlertOdd, { title: "Saturday July 9th, 2022 - Live Music by George James",
            message: "One of our regulars, George James plays classic country and folk tunes that everyone can appreciate." }),
        React.createElement(EventAlertEven, { title: "Friday July 15th, 2022 - Private Event at the Pavilion",
            message: "Tastings will be held on the western hillside at the wine shack. Please bear with us while we expand and build our new tasting room." }),
        React.createElement(EventAlertOdd, { title: "Sunday August 21st - Wildcraft Kitchen Mushroom Foray",
            message: ["Another one-of-a-kind tour with ", React.createElement(Href, { link: "https://www.wildcraftkitchenga.com/", text: "Wildcraft Kitchen!" })]
        }),
        React.createElement(EventAlertEven, { title: "Saturday August 6th, 2022 - Live Music by High Lonesome",
            message: "Philmer and Lisa Kilby will be entertaining us with their phenomenal guitar and vocals!" }),
        React.createElement(EventAlertOdd, { title: "Saturday August 13th, 2022 - Live Music by Scott Low" }),
        React.createElement(EventAlertEven, { title: "Saturday August 20th, 2022 - Live Music by Jake Hicks",
            message: "Another one of our regular performers, happy to have him back!" }),
        React.createElement(EventAlertOdd, { title: "Sunday August 21st - Wildcraft Kitchen Mushroom Foray",
            message: ["Another one-of-a-kind tour with ", React.createElement(Href, { link: "https://www.wildcraftkitchenga.com/", text: "Wildcraft Kitchen!" })]
        })
    );
}

ReactDOM.render(React.createElement(EventAlerts, null), document.getElementById('event_alert_container'));