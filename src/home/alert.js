function PrimaryAlert(props) {
  return (
    <div class="alert alert-primary" role="alert">
        <AlertContent text={props.text}/>
        <img src={props.image_url} class="rounded" alt={props.image_alt}></img>
    </div>);
    }

 function DangerAlert(props) {
  return (
    <div class="alert alert-danger" role="alert">
        <AlertContent text={props.text}/>
    </div>
    );
   }

 function SecondaryAlert(props) {
  return (
    <div class="alert alert-secondary" role="alert">
        <AlertContent text={props.text}/>
    </div>
    );
}

function AlertContent(props) {
    return (
    <div class="cover-heading">{props.text}
    <img src={props.image_url} class="rounded" alt={props.image_alt}></img>
    </div>);
}

function Alerts() {
    return (
    <div>
        <PrimaryAlert text="High  Lonesome will be playing live music this Saturday, April 2nd!" />
        <SecondaryAlert text={<a href="./events_public.html">See our events page for upcoming events including when
        private events require us to use the western hillside for tastings.</a>} />
      </div>
  );
}

ReactDOM.render(
  <Alerts />,
  document.getElementById('alert_container')
);