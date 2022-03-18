function PrimaryAlert(props) {
  return (
    <div class="alert alert-primary" role="alert">
        <div class="cover-heading">{props.text}</div>
        <img src={props.image_url} class="rounded"
        alt={props.image_alt}></img>
    </div>);
    }

 function DangerAlert(props) {
  return (
    <div class="alert alert-danger" role="alert">
        <div class="cover-heading">{props.text}</div>
    </div>
    );
}

function Alerts() {
    return (
    <div>
        <PrimaryAlert text="Welcome back Lisa and Philmer Kilby! They will be playing live music this Saturday, March 19th." />
       </div>
  );
}

ReactDOM.render(
    <Alerts />,
    document.getElementById('alert_container')
);