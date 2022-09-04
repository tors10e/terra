import React from 'react';


  const events = [
    ["Sunday  September 4th, 2022 - Operations back to normal", "After some bad weather that made access to the wine shack very tricky we have moved back to the pavilion for the remainder of September."],
    ["Monday September 5th, 2022 - Open for labor day", "Open for labor day!"],
    ["Saturday September 10th, 2022 - Stephen Vaclavik Music", "Music is from 3 - 7 pm"],
    ["Sunday September 11th, 2022 - Live Music by Larry Walker", makeHref("https://soundcloud.com/user-131558822","A first for performing at Terra but long time customer, we welcome Larry Walker!")],
    ["Saturday September 17th, 2022 - Music by High Lonesome", "Welcome back Kilbys! Music is from 3 - 7 pm"],
    ["Saturday September 24th, 2022 - Music by George James", "Long time favorite George James will be with us again, music is from 3 - 7 pm"],
    ["Saturday October 1st, 2022 - Brian Horton", "Welcome back Brian, music is from 3 - 7 pm"],
  ]


function Href(props){
    return <a href={props.link} target="_blank">{props.text}</a>
};

function EventAlertEven(props) {
  return       <div class="topic">
                <div class="alert alert-primary" role="alert">
                    <h2 class="cover-heading">{props.title}</h2>
                </div>
                <p class="lead">{props.description}</p>
            </div>
}


function EventAlertOdd(props) {
  return       <div class="topic">
                <div class="alert alert-secondary" role="alert">
                    <h2 class="cover-heading">{props.title}</h2>
                </div>
                <p class="lead">{props.description}</p>
            </div>
}


function EventAlerts() {
    const eventAlerts = events.map((event) =>
            <EventAlertOdd title = {event[0]} description = {event[1]} />
            );

    return (
    <div>{eventAlerts}</div>
  );
}

  function makeHref(httpLink, linkText) {
    return <Href link={httpLink} text={linkText}/>
  }


export default EventAlerts;