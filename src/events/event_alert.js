
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
     <EventAlertOdd title = "Saturday July 9th, 2022 - Live Music by George James"
        message="One of our regulars, George James plays classic country and folk tunes that everyone can appreciate." />
     <EventAlertEven title="Friday July 15th, 2022 - Private Event at the Pavilion"
        message="Tastings will be held on the western hillside at the wine shack. Please bear with us while we expand and build our new tasting room."/>
       <EventAlertOdd title = "Sunday August 21st - Wildcraft Kitchen Mushroom Foray"
        message = {["Another one-of-a-kind tour with ", <Href link={"https://www.wildcraftkitchenga.com/"} text={"Wildcraft Kitchen!"}/>,
        ]}
        />
    <EventAlertEven title="Saturday August 6th, 2022 - Live Music by High Lonesome"
        message="Philmer and Lisa Kilby will be entertaining us with their phenomenal guitar and vocals!"/>
    <EventAlertOdd title = "Saturday August 13th, 2022 - Live Music by Scott Low"/>
    <EventAlertEven title="Saturday August 20th, 2022 - Live Music by Jake Hicks"
        message="Another one of our regular performers, happy to have him back!"/>
     <EventAlertOdd title = "Sunday August 21st - Wildcraft Kitchen Mushroom Foray"
        message = {["Another one-of-a-kind tour with ", <Href link={"https://www.wildcraftkitchenga.com/"} text={"Wildcraft Kitchen!"}/>,
        ]}
        />
        </div>
  );
}


ReactDOM.render(
  <EventAlerts />,
  document.getElementById('event_alert_container')
);