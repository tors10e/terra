
function Href(props){
    return <a href={props.link} target="_blank">{props.text}</a>
};

function EventAlertEven(props) {
  return       <div class="topic">
                <div class="alert alert-primary" role="alert">
                    <h2 class="cover-heading">{props.title}</h2>
                </div>
                <p class="lead">{props.message}</p>
            </div>
}


function EventAlertOdd(props) {
  return       <div class="topic">
                <div class="alert alert-secondary" role="alert">
                    <h2 class="cover-heading">{props.title}</h2>
                </div>
                <p class="lead">{props.message}</p>
            </div>
}


function EventAlerts() {
  return (
    <div>

     <EventAlertEven title="April 30rd, 2022 - Live music from Eric Thurmond!" message="Eric Thurmond will be playing Saturday from 3 - 7 pm. This
     is his first time playing at Terra, so let's make him feel welcome!"  />
     <EventAlertOdd title="May 7th, 2022 - Private Event at the Pavilion" message="This will be our first private event of the year so tastings will be held on the western hillside.
        Please bear with us while we expand and are building our new tasting room."  />
     <EventAlertEven title="May 27 - 28th, 2022 - Private Event at the Pavilion" message="Tastings will be held in the open on the western hillside, please bear with us while we expand and are building our new tasting room."  />
    <EventAlertOdd title = "May 29th, 2022 - Music by Jake Hicks" message="Great music by Jake Hicks will be playing from 3 - 7 pm!" />
    <EventAlertEven title = "June 4th, 2022 - Music by High Lonesome" message = "We are looking forward to Kilmer and Lisa playing their fantastic music with us at the pavilion!" />
    <EventAlertOdd title = "June 5th, 2022 - Paint and sip event" message = 'Details to follow.' />
    <EventAlertEven title = "June 10th - 12th - Private Event at the Pavilion and Wildcraft Kitchen Foraging Tour"
        message = "Tastings will be held in the open on the western hillside, please bear with us while we expand and are \
        building our new tasting room for additional capacity. Don't let that make you miss another one-of-a-kind foraging tour \
        on Sunday the 12th with Wildcraft Kitchen!" />
    </div>
  );
}


ReactDOM.render(
  <EventAlerts />,
  document.getElementById('event_alert_container')
);