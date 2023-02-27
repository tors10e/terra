import React from 'react';
import pavilion_photo from '../images/public_events/HillsidePavilion.jpg';
import Alert from 'react-bootstrap/Alert';
import { v4 as uuidv4 } from 'uuid';


//Format of events are ["End Date (date used for programmatic purposes", "Diplay Date", "Description", image]
//todo: This should be refactored to filter out alerts based on the end date given in the first position of the array.


// Example of an event with photo  ["March 3, 2023", "First day of the season we are back to being open!", pavilion_photo]
// Example of an event without photo  ["March 3, 2023", "First day of the season we are back to being open!"]
  const events = [
        ["March 3, 2023", "First day of the season we are back to being open!", pavilion_photo],
        ["May 13, 2023", "Grand opening and open house of new tasting room and winery at 12:00"],
  ]


function Href(props){
    return <a href={props.link} target="_blank">{props.text}</a>
};


function EventAlertOdd(props) {
  if (props.image != null) {
  return    <>
                <div className="alert alert-secondary" role="alert">
                    <h4 className="cover-heading">{props.title}</h4>
                    <p class="lead">{props.description} </p>
                    <img src={props.image} fluid="false" alt=""></img>
                </div>
            </>
            }
   else {
    return  <>
                <div className="alert alert-secondary" role="alert">
                    <h4 className="alert-heading">{props.title}</h4>
                    {props.description}
                </div>
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