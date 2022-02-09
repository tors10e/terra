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
        <PrimaryAlert
            text={<a href="./chefs_dinner.html">Winter Wonderland chef's dinner scheduled for January 29th, 2022 - get your tickets now only a few left!</a> }
            image_url='./images/winter_wonderland_flyer.png'
            image_alt='winter wonderland flyer'
        />
        <DangerAlert text="Closed for the season except for special events." />
        </div>
  );
}

ReactDOM.render(
    <Alerts />,
    document.getElementById('alert_container')
);