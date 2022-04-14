
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
    React.createElement(EventAlertOdd, { title: "April 16th, 2022 - Egg hunts, foraging tours, and live music by Jake Hicks!", message: ["This \
        is an action packed weekend! At 10:00 Wildcraft Kitchen will be doing a foraging tour and Jake Hicks will be playing from 3-7 pm. \
        At 4 pm the kids easter egg hunt begins followed by the adult hunt at 6 pm.", React.createElement(Href, { link: "https://square.link/u/FCpcEDM1", text: "Buy your easter egg hunt tickets here" }), ". and checkout details on all the events on our ", React.createElement(Href, { link: "https://www.facebook.com/TerraIncognitaVineyard/events", text: "facebook page." })] }),
    React.createElement(EventAlertEven, { title: "April 23rd, 2022 - Live music from Ryan Little Eagle!", message: "Ryan will be back and killing it with the NDN Country genre. Unique mix of country and first nations music!" }),
    React.createElement(EventAlertOdd, { title: "May 7th, 2022 - Private Event at the Pavilion", message: "This will be our first private event of the year so tastings will be held on the western hillside.\r Please bear with us while we expand and are building our new tasting room." }),
    React.createElement(EventAlertEven, { title: "May 27 - 28th, 2022 - Private Event at the Pavilion", message: "Tastings will be held in the open on the western hillside, please bear with us while we expand and are building our new tasting room." }),
    React.createElement(EventAlertOdd, { title: "May 29th, 2022 - Music by Jake Hicks", message: "Great music by Jake Hicks will be playing from 3 - 7 pm!" }),
    React.createElement(EventAlertEven, { title: "June 4th, 2022 - Music by High Lonesome", message: "We are looking forward to Kilmer and Lisa playing their fantastic music with us at the pavilion!" }),
    React.createElement(EventAlertOdd, { title: "June 5th, 2022 - Paint and sip event", message: "Details to follow." }),
    React.createElement(EventAlertEven, { title: "June 10th - 12th - Private Event at the Pavilion and Wildcraft Kitchen Foraging Tour",
      message: "Tastings will be held in the open on the western hillside, please bear with us while we expand and are \\\r building our new tasting room for additional capacity. Don't let that make you miss another one-of-a-kind foraging tour \\\r on Sunday the 12 th with Wildcraft Kitchen!" })
  );
}

ReactDOM.render(React.createElement(EventAlerts, null), document.getElementById('event_alert_container'));