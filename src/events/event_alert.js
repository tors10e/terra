
function Href(props){
    return <a href={props.link} target="_blank">{props.text}</a>
};

function EventAlertEven(props) {
  return       <div class="topic">
                <div class="alert alert-primary" role="alert">
                    <h2 class="cover-heading">{props.title}</h2>
                </div>
                <p class="lead">{props.description}</p>
            </div>
}


function EventAlertOdd(props) {
  return       <div class="topic">
                <div class="alert alert-secondary" role="alert">
                    <h2 class="cover-heading">{props.title}</h2>
                </div>
                <p class="lead">{props.description}</p>
            </div>
}


function EventAlerts() {
    const eventAlerts = events.map((event) =>
            <EventAlertOdd title = {event[0]} description = {event[1]} />
            );

    return (
    <div>{eventAlerts}</div>
  );
}

  function makeHref(httpLink, linkText) {
    return <Href link={httpLink} text={linkText}/>
  }


  const events = [
    ["Saturday July 30th, 2022 - Live Music by George James", "George will be playing starting at 2 pm so come early to enjoy his music."],
    ["Saturday August 6th, 2022 - Live Music by High Lonesome", "Philmer and Lisa Kilby will be entertaining us with their phenomenal guitar and vocals!"],
    ["Saturday August 13th, 2022 - Live Music by Scott Low", ""],
    ["Saturday August 20th, 2022 - Live Music by Jake Hicks", "Another one of our regular performers, happy to have him back!"],
    ["Sunday August 21st - Wildcraft Kitchen Mushroom Foray",  makeHref("https://www.wildcraftkitchenga.com/", "Wildcraft Kitchen's website!")]
  ]


export default EventAlerts;