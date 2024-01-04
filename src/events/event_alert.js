import React from 'react';
import pavilion_photo from '../images/public_events/HillsidePavilion.jpg';
import Alert from 'react-bootstrap/Alert';
import {events,} from '../events/list_of_events';
import { v4 as uuidv4 } from 'uuid';
import {GetDayOfTheWeek, StringToDayOfTheWeek, MakeDateNiceToRead} from '../components/utilities';
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

function IsEventCurrent(event_date, current_date) {
    var isCurrent = false;
    if (event_date >= current_date) {
       isCurrent = true;
    }
    return isCurrent;
 }


function GetEvents() {
    if (events.length > 0)
        {return events}
    else
        {var no_events =
            [
                [MakeDateNiceToRead(new Date()), "No scheduled events, check back soon!"],
            ]
            return no_events;
         }
}


export function CurrentEvents(props) {
    var current_events = [];
    // Set current date without time part so that a comparison by day is possible without having to deal with time.
    const current_date = new Date(new Date().toDateString());
    var event_list = GetEvents();
    event_list.map((event) => {
        const event_date = new Date(event[0])
            if (IsEventCurrent(event_date, current_date) == true) {
                var pretty_date = MakeDateNiceToRead(Date(event[0]))
                const new_event = [pretty_date, event[1], event[2]]
                current_events.push(new_event);
                }
    })
    return (current_events)
}

