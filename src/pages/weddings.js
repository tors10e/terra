import React from 'react';
import Image from 'react-bootstrap/image';
import TheKnotImage from "../images/theknot.jpg";
import WeddingPackages from "../images/Packages2023.pdf";
import WalkwayImage from "../images/pavilion_walkway.jpg";


const Weddings = () => {
    return (
    <>
        <div>
            <div class="topic">
                <h1 class="cover-heading">Host Your Event at Terra Incognita Vineyard</h1>
                <p class="lead">
                    We provide a 1,800 sq. ft. pavilion with an attached catering kitchen, fireplace, bar, and upstairs
                    suite
                    situated on our eastern hillside. Sunsets fall in the notch between the hillsides to the west,
                    providing an excellent evening view from the pavilion lawn and upper vineyard. Firewood is provided
                    for
                    the stately fireplace and the outdoor fire ring. For inclement weather, vinyl walls can be erected
                    to enclose the event space.
                    Depending on the event package, included items are:
                </p>
                <div class="container text-left list-unordered">
                    <div class="row">
                        <div class="col">
                            <ul class="">
                                <li>Tables and chairs for up to 150 set up per discussion during event planning</li>
                                <li>Use of the space from the afternoon before your event (so you can decorate), until
                                    the early morning the day after
                                </li>
                                <li>Event set up on our lawn overlooking the vineyard with the mountains in the
                                    background
                                </li>
                                <li>Access to our vendor list and assistance developing an event budget (you are not
                                    required to use our vendors)
                                </li>
                            </ul>
                        </div>
                        <div class="col col-sm-1"></div>
                        <div class="col">
                            <ul class="">
                                <li>Table drapes</li>
                                <li>Parking attendants during the event</li>
                                <li>Vinyl walls in case of inclement weather</li>
                                <li>Use of catering kitchen</li>
                                <li>Exclusive use of campsite</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul id="events" class="list-group list-group-flush">
                    <li class="list-group-item list-group-item-secondary"><a id="event-group" href="#weddings">Weddings</a></li>
                    <li class="list-group-item list-group-item-light"><a id="event-group" href="#parties">Parties</a></li>
                    <li class="list-group-item list-group-item-secondary"><a id="event-group" href="#corporate">Corporate</a></li>
                </ul>
            </div>
            <div class="topic topic-even">
                <h2 id="weddings">Weddings</h2>
                <div class="row align-items-start">
                    <div class="col">
                        <img src={WalkwayImage} fluid="true" alt="..."></img>
                    </div>
                    <div class="col">
                        <p>
                            Our wedding packages are no-nonsense and complete. There are no up-charges or hidden costs.
                            When you
                            book with us your venue costs will not creep upwards. We believe in transparent pricing,
                            when comparing
                            other options please add their final costs before making a decision!

                            Further, we can help you achieve and maintain your overall wedding budget. We are more than
                            happy to
                            work with you to find catering, lodging, florists, and photographers and will recommend
                            those you can trust.
                        </p>
                        <div class="grid">
                            <div class="row justify-content-center">
                                <a href={WeddingPackages} target="_blank" class="btn btn-primary">Wedding packages
                                    and price list</a>
                            </div>
                            <div class="row justify-content-center">
                                <a href="https://www.theknot.com/marketplace/terra-incognita-vineyard-clarkesville-ga-2045766"
                                   target="_blank"> <img src={TheKnotImage} alt="Link to The Knot website"></img></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Weddings;