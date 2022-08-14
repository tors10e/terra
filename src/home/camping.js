import React from "react";
import orientation from '../images/terra_orientation.pdf';


const Camping = () => {
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

                If you're a current camper, check out the <a href={orientation} target="_blank">orientation
                    sheet</a>
                for information on what to expect and what to do.
            </p>
        </div>
    );
};

export default Camping;