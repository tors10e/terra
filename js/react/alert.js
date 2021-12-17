function PrimaryAlert(props) {
    return React.createElement(
        "div",
        { "class": "alert alert-primary", role: "alert" },
        React.createElement(
            "div",
            { "class": "cover-heading" },
            props.text
        ),
        React.createElement("img", { src: props.image_url, "class": "rounded",
            alt: props.image_alt })
    );
}

function DangerAlert(props) {
    return React.createElement(
        "div",
        { "class": "alert alert-danger", role: "alert" },
        React.createElement(
            "div",
            { "class": "cover-heading" },
            props.text
        )
    );
}

function Alerts() {
    return React.createElement(
        "div",
        null,
        React.createElement(PrimaryAlert, {
            text: React.createElement(
                "a",
                { href: "./chefs_dinner.html" },
                "Winter Wonderland chef's dinner scheduled for January 15th, 2022 - get your tickets now!"
            ),
            image_url: "./images/winter_wonderland_flyer.png",
            image_alt: "winter wonderland flyer"
        }),
        React.createElement(DangerAlert, { text: "Closed for the season except for special events, stayed tuned!" })
    );
}

ReactDOM.render(React.createElement(Alerts, null), document.getElementById('alert_container'));