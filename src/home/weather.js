import React from 'react';

const Weather = () => {
    return (
        <div className="topic section-heading">
            <h2 id="weather">Current Weather</h2>
            <iframe width="500" height="400" frameborder="0"
                src="https://ambientweather.net/devices/public/9f012ca22a6e26b30e2428125ca94088?embed=true">
            </iframe>
        </div>
        );
};

export default Weather;