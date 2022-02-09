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
        <DangerAlert text="Closed for the season except for special Winter Wonderland events. We will be opening again
        the first weekend in March, see you then!" />
        </div>
  );
}

ReactDOM.render(
    <Alerts />,
    document.getElementById('alert_container')
);