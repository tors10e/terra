import React from 'react';
import pavilion_photo from '../images/public_events/HillsidePavilion.jpg';
import Alert from 'react-bootstrap/Alert';
import { v4 as uuidv4 } from 'uuid';
import {CurrentEvents, GetDayOfTheWeek} from '../components/utilities';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export function Href(props){
    return <a href={props.link} target="_blank">{props.text}</a>
};


function EventAlert(props) {
  return    <>
            <Card style={{ width: '30rem' }} border="info" bg="light">
              <Card.Img variant="top" src={props.image} />
              <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
              </Card.Body>
            </Card>
            </>
 }


export function EventAlerts() {
    const current_events = CurrentEvents();
    const eventAlerts = current_events.map((event) =>
            <EventAlert key={event[0]} title = {event[0]} description = {event[1]} image={event[2]} />
            );
    return (
        <div>{eventAlerts}</div>
    );
}
