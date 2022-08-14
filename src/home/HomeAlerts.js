import Alerts from '../components/alerts'

function HomeAlerts() {
    return (
    <div>
        <Alerts.Secondary text={<a href="./events_public.html">See our events page for upcoming events including when
        private events require us to use the western hillside for tastings.</a>} />
      </div>
  );
}

export default HomeAlerts