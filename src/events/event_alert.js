import React from 'react';


//Format of events are ["End Date (date used for programmatic purposes", "Diplay Date", "Description"]
//todo: This should be refactored to filter out alerts based on the end date given in the first position of the array.


  const events = [
    ["November 20, 2022", "Friday Oct 7th - Sunday Nov 20th Tastings on the Western Hillside.", "Private events are scheduled starting Friday October \
     7th and will continue through the end of November. Tastings will be held in the open on the Western Hillside. Thanks for your patience while we construct \
     our new tasting room and winery to be open Spring 2023!"],
    ["November 25, 2022", "Thanksgiving - Back to the Pavilion!", "We are back to the pavilion for wine tastings until \
    the end of the year!"],
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