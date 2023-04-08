import events from '../events/list_of_events';

//const date_today = new Date();

// Look at each event in the events file and make a new list with
// those that are not in the past.
function CurrentEvents() {
    const current_events = events.map((event) => {
//        console.log(event);
        if (event[0] >= Date()) {
            current_events.add(event);
            }
        }
    );
    return (current_events);
}

export default CurrentEvents;

