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
        React.createElement(PrimaryAlert, { text: "We're back open starting March 4th, welcome back! Lisa and Philmer Kilby will be\r playing live music on Saturday." })
    );
}

ReactDOM.render(React.createElement(Alerts, null), document.getElementById('alert_container'));