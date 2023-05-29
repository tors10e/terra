import {events, no_events} from '../events/list_of_events';

// Look at each event in the events file and make a new list with
// those that are not in the past.


function IsEventCurrent(event_date, current_date) {
    var isCurrent = false;
    if (event_date >= current_date) {
       isCurrent = true;
    }
    return isCurrent;
 }

export function CurrentEvents(props) {
    var current_events = [];
    // Set current date without time part so that a comparison by day is possible without having to deal with time.
    const current_date = new Date(new Date().toDateString());
        events.map((event) => {
            const event_date = new Date(event[0])
            if (IsEventCurrent(event_date, current_date) == true) {
                current_events.push(event);
                }
            }
        )
    if (current_events.length < 1)
        { return (no_events)}
    else
        { return (current_events)}
}


export function GetDayOfTheWeek(props) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return weekday[props]
}

