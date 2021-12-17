function PrimaryAlert(props) {
  return (
    <div class="alert alert-primary" role="alert">
        <div class="cover-heading">{props.text}</div>
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
        <PrimaryAlert text={<a href="./chefs_dinner.html">Winter Wonderland chef's dinner scheduled for January 15th, 2022 - get your tickets now!</a> } />
        <DangerAlert text="Closed for the season except for special events, stayed tuned!" />
        </div>
  );
}

ReactDOM.render(
    <Alerts />,
    document.getElementById('alert_container')
);