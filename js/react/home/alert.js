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
        React.createElement(DangerAlert, { text: "Closed for the season except for special Winter Wonderland events. We will be opening again\r the first weekend in March, see you then!" })
    );
}

ReactDOM.render(React.createElement(Alerts, null), document.getElementById('alert_container'));