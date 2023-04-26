import events from '../events/list_of_events';

// Look at each event in the events file and make a new list with
// those that are not in the past.


export function CurrentEvents(props) {
    const current_events = [];
    const current_date = new Date();
    events.map((event) => {
        const event_date = new Date(event[0])
        if (event_date >= current_date) {
            current_events.push(event);
            }
        }
    )
    return (current_events);
}


export function GetDayOfTheWeek(props) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    return weekday[props]
}

