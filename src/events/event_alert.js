import React from 'react';


  const events = [
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