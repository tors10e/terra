
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
    React.createElement(EventAlertEven, { title: "March 25th, 2022 - Live music from George James!", message: "George James will be playing again this weekend, welcome back! He will be playing from 3-7 pm." }),
    React.createElement(EventAlertOdd, { title: "April 2nd, 2022 - Live music from the Kilbys!", message: "Lisa and Philmer will be entertaining us again! Come up and show them some support!" }),
    React.createElement(EventAlertEven, { title: "April 9th, 2022 - Live music from George James!", message: "George James will be playing again this weekend, welcome back! He will be playing from 3-7 pm." }),
    React.createElement(EventAlertOdd, { title: "April 16th, 2022 - Live music from Jake Hicks!", message: "Jack Hick is back and he will be playing from 3-7 pm." }),
    React.createElement(EventAlertEven, { title: "April 23rd, 2022 - Live music from Ryan Little Eagle!", message: "Ryan will be back and killing it with the NDN Country genre. Unique mix of country and first nations music!" }),
    React.createElement(EventAlertOdd, { title: "May 7th, 2022 - Private Event at the Pavilion", message: "This will be our first private event of the year so tastings will be held on the western hillside.\r Please bear with us while we expand and are building our new tasting room." }),
    React.createElement(EventAlertEven, { title: "May 28th, 2022 - Private Event at the Pavilion", message: "Tastings will be held in the open on the western hillside, please bear with us while we expand and are building our new tasting room." })
  );
}

ReactDOM.render(React.createElement(EventAlerts, null), document.getElementById('event_alert_container'));