import React from 'react';
import pavilion_photo from '../images/public_events/HillsidePavilion.jpg';
import Alert from 'react-bootstrap/Alert';
import { v4 as uuidv4 } from 'uuid';


//Format of events are ["End Date (date used for programmatic purposes", "Diplay Date", "Description", image]
//todo: This should be refactored to filter out alerts based on the end date given in the first position of the array.


  const events = [
        ["November 25, 2022", "Thanksgiving - Back to the Pavilion!", "We are back to the pavilion for wine tastings until the end of the year!"],
        ["January 1, 2023", "Last day of the season", "see you in March!"],
        ["April 21, 2023", "Private event at the East Ridge Pavilion", "We may be in the new tasting room by this, fingers crossed."],
        ["April 28, 2023", "Grand Opening New Tasting Room", "Rough estimate for the grand opening of the new tasting room."],
  ]


function Href(props){
    return <a href={props.link} target="_blank">{props.text}</a>
};


function EventAlertOdd(props) {
  if (props.image != null) {
  return       <>
                <div className="alert alert-secondary" role="alert">
                    <h2 className="cover-heading">{props.title}</h2>
                </div>
                <p class="lead">{props.description} </p>
                <img src={props.image} fluid="false" alt=""></img>
            </>
            }
   else {
    return       <>
        <Alert key="secondary" variant="secondary">
          {props.description}
        </Alert>
            </>
        }
 }


function EventAlerts() {
    const eventAlerts = events.map((event) =>
            <EventAlertOdd title = {event[0]} description = {event[1]} image={event[2]} />
            );

    return (
        <div>{eventAlerts}</div>
    );
}


export default EventAlerts;