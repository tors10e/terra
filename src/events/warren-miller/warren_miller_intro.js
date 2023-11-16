import React from "react";
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';


const WarrenMillerIntro = () => {
    return (
    <div className="topic">
        <h1 className="cover-heading">Welcome to the Warren Miller Film Tour at Terra!</h1>
        <Button variant="primary" size="lg" target="_blank" href="https://checkout.square.site/buy/QKSLLJ2AGXVEACNXLEGDXMNI">Purchase Tickets Here</Button>
        <Alert variant="primary">Tickets are limited so please purchase them in advance so you are not left out in the cold!</Alert>
        <p> This is our first year hosting the Warren Miller Film Tour and we are beyond excited to bring this to
        fellow outdoor enthusiasts in the  Southern Highlands, this is going to be great! Warren Miller’s ALL TIME is bringing 74 years of filmmaking reimagined
        to a theater near you this fall. And this season, it's all about good turns and good snow on good hills with good people.  Narrated by Jonny Moseley,
        ALL TIME dives deep into elements that Warren himself first identified as the stuff of which snowy dreams are made. From the birth of ski towns like
        Sun Valley and Aspen to icons and innovators like the original hotdoggers, the film brings the best of seven decades along with humor and inspiration
        from today—featuring Maine’s finest athlete, Donny Pelletier, and the next generation of skiers and riders at Woodward Park City. Less a documentary
        than a love letter, ALL TIME is a way to honor how, where, and with whom we’ve made ski and snowboard movies since Warren first picked up a camera in 1949.
        Join us as we celebrate how snow sports have burrowed into our collective consciousness as an obsession and a way of life. The two-year party for 75
        seasons on snow starts October 2023.
        </p>

        <h2 className="cover-heading">The Event</h2>
        <p>So, what is this going to look like? The event will be held at the Pavilion, which is located on Stoney Mountain, about  1.5 miles up a gravel Forest Service
        Road. We are kid and dog friendly! There is a bar with wine and food available for purchase. Although the pavilion is open air, we have vinyl walls and propane heaters to keep the place
        passably warm. That being said it's a good idea to dress for cold weather, since December can be cold and windy. We have a fire pit, for hanging around outside
        after the show. </p>
        <p>On the other hillside, we have a winery and tasting room which is open from 12:30 - 9:00 pm in case you want to come early and hang out.
        </p>

        <h2 className="cover-heading">Raffle and Sweepstakes</h2>
        <p>Stay tuned for more information on this, there are some great prizes though...trust me.</p>

        <h2 className="cover-heading">Food</h2>
        <p>There will be some light food like soup and personal flatbread pizzas available so you don't starve'.</p>

        <h2 className="cover-heading">Drink</h2>
        <p>We will have wine, hot chocolate, coffee, tea  and probably warm Glüwein available for sale throughout the event, but feel free to BYOB.</p>

        <h2 className="cover-heading">Lodging</h2>
        <p><b>Camping</b> - the property is surrounded by National Forest, so camping is allowed within 100' of the pavilion.
        Note that there are no actual campsites, but forest with flat areas where a tent can be put up. Please contact
        us for more information on this if you are interested.</p>

        <p>For a campground style experience, Tallulah Gorge State Park Campground is open and has availability during the first week in December: <a href="https://gastateparks.reserveamerica.com/camping/tallulah-gorge-state-park/r/campsiteCalendar.do?page=calendar&search=site&contractCode=GA&parkId=530196"
            target="_blank">Tallulah Falls Campground Reservations</a>.
        </p>
        <p><b>Nearby Hotels</b>:
            <ul>
                <li><a target="_blank" href="https://www.ihg.com/holidayinnclubvacations/hotels/us/en/clarkesville/toccv/hoteldetail">Apple Mountain Resort</a></li>
                <li><a target="_blank" href="https://www.lakerabunhotel.com/">Lake Rabun Hotel</a></li>
                <li><a target="_blank" href="https://glenella.com/">Glenn Ella Springs</a></li>
            </ul>
        </p>
    </div>
    );
};

export default WarrenMillerIntro;
