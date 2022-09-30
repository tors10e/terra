import React from 'react';


  const events = [
    ["October 1, 2022", "Saturday October 1st, 2022 - Brian Horton", "Welcome back Brian! Music will be from from 3 - 7 pm."],
    ["October 8, 2022", "Saturday October 8th, 2022 - Private Event", "Tastings to be held outside on the Western \
    Hillside Lawn. Access to the pavilion will be limited to wedding guests."],
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
            <EventAlertOdd title = {event[1]} description = {event[2]} />
            );

    return (
    <div>{eventAlerts}</div>
  );
}

  function makeHref(httpLink, linkText) {
    return <Href link={httpLink} text={linkText}/>
  }


export default EventAlerts;