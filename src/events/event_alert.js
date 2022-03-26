
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
      <EventAlertEven title="March 25th, 2022 - Live music from George James!" message="George James will be playing again this weekend, welcome back! He will be playing from 3-7 pm." />
      <EventAlertOdd title="April 2nd, 2022 - Live music from the Kilbys!"  message="Lisa and Philmer will be entertaining us again! Come up and show them some support!"/>
      <EventAlertEven title="April 9th, 2022 - Wine and Weave and Live music from George James!" message={["Learn how to craft a basket from our cab vines in our \
      first ever wine and weave! ",
      <a href='https://square.link/u/1W5veUql'>Buy your tickets here.</a>,
      " Included is a glass of wine, instruction, and all necessary materials. See our Facebook event for more information ",
       <a href="https://fb.me/e/25c5jLffk">Wine and Weave with Cleve.</a>,
       " Also George James will be playing from 3 -7 PM!"]}/>
      <EventAlertOdd title="April 16th, 2022 - Egg hunt and live music from Jake Hicks!" message="Jack Hick is back and he will be playing from 3-7 pm."  />
      <EventAlertEven title="April 23rd, 2022 - Live music from Ryan Little Eagle!" message="Ryan will be back and killing it with the NDN Country genre. Unique mix of country and first nations music!"  />
      <EventAlertOdd title="May 7th, 2022 - Private Event at the Pavilion" message="This will be our first private event of the year so tastings will be held on the western hillside.
        Please bear with us while we expand and are building our new tasting room."  />
     <EventAlertEven title="May 28th, 2022 - Private Event at the Pavilion" message="Tastings will be held in the open on the western hillside, please bear with us while we expand and are building our new tasting room."  />
    </div>
  );
}

ReactDOM.render(
  <EventAlerts />,
  document.getElementById('event_alert_container')
);