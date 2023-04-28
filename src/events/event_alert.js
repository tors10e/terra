import React from 'react';
import pavilion_photo from '../images/public_events/HillsidePavilion.jpg';
import Alert from 'react-bootstrap/Alert';
import { v4 as uuidv4 } from 'uuid';
import {CurrentEvents, GetDayOfTheWeek} from '../components/utilities';


export function Href(props){
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



export function EventAlerts() {
    const current_events = CurrentEvents();
    const eventAlerts = current_events.map((event) =>
            <EventAlertOdd key={event[0]} title = {event[0]} description = {event[1]} image={event[2]} />
            );
    return (
        <div>{eventAlerts}</div>
    );
}
