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
        <PrimaryAlert text="We're back open starting March 4th, welcome back! Lisa and Philmer Kilby will be
        playing live music on Saturday." />
       </div>
  );
}

ReactDOM.render(
    <Alerts />,
    document.getElementById('alert_container')
);