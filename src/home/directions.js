import React from 'react';
import TerraCard from '../components/terra_card';
import TextDirections from './text_directions';


function Directions(props) {
    return(
            <TerraCard
                card_title="From Clarkesville (13 mi)"
                card_text=<TextDirections />
                button_text="Chart on Google Maps"
                button_href="https://www.google.com/maps/dir/Clayton,+Georgia+30525/Vandiver+Mountain+Rd,+Georgia/@34.807062,-83.5383547,12z/am=t/data=!4m13!4m12!1m5!1m1!1s0x8858dabf68ad91b7:0xc7f40afdec4f498d!2m2!1d-83.4009933!2d34.8781479!1m5!1m1!1s0x8858c982f82186f5:0xaa8cd4c722afaf3f!2m2!1d-83.4992099!2d34.731045"
            />
    );
};

export default Directions;
