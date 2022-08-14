import React from "react";

const Hours = () => {
    return (
        <div className="topic topic-even section-heading">
            <h2 id="hours">Operating Hours and Season</h2>
            <div className="container">
                <div className="row">
                    <div className="p-3 col bg-light">
                        March - December (Currently open for the season)
                    </div>
                </div>
                <div className="row ">
                    <div className="col">
                        <div className="strong">
                            Friday:
                        </div>
                        <div>
                            Saturday:
                        </div>
                        <div>
                            Sunday:
                        </div>
                    </div>
                    <div className="col">
                        <div>4:00 - 9:00 PM</div>
                        <div>12:30 - 9:00 PM</div>
                        <div>12:30 - 9:00 PM</div>
                    </div>
                </div>
            </div>
            <p class="text-muted p-3 small">* <em>Special events are available by appointment</em></p>
        </div>
    );
};

        export default Hours;