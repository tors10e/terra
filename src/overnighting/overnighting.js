import React from 'react';


function Camping(props) {
    return (
        <div className="topic topic-odd section-heading">
            <h2 id="camping">Camping</h2>
            <p>Unimproved camping is available on the western hillside overlooking the vineyard. Since we limit
                camping to
                one group, you'll have
                the place to yourself. To reserve a spot go to <a
                    href="https://www.hipcamp.com/en-US/georgia/torsten-e-s-land/terra-incognita-vineyard"
                    target="_blank">
                    https://www.hipcamp.com/en-US/georgia/torsten-e-s-land/terra-incognita-vineyard</a>.

                If you're a current camper, check out the <a href="./images/terra_orientation.pdf" target="_blank">orientation sheet </a>
                for information on what to expect and what to do.
            </p>
        </div>
    )
}

function Apartment(props) {
    return (
        <div className="topic topic-even section-heading">
            <h2 id="apartment">Apartment</h2>
            <p>Above the pavilion is a beautiful apartment available for rental. Please checkout our \
            <a href="https://www.vrbo.com/2328117?adultsCount=2&arrival=2022-07-14&departure=2022-07-16&unitId=2894423" target="_blank">VRBO Listing</a>
            </p>
        </div>
    )
}

export function Overnighting(){
    return (
    <>
        <div>
            <Camping />
            <Apartment />
        </div>
        </>
    )
}
