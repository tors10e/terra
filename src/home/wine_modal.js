import React from "react";
import Bsmodal from '../components/bsmodal';
import Intro from '../home/intro';


function WineModal(props) {
    return(
    <>
        <Bsmodal
            button_text="Find out more about Cabernet Sauvignon"
            title_text="Cabernet Sauvignon"
            body_text="Notes of plum, black cherry and tobacco meld to create a medium body and lightly oaked
                red wine that's perfect for settling into a relaxing evening."
         />
        <Bsmodal
            button_text="Compass Rose"
            title_text="Compass Rose"
            body_text="Medium dry blend of Pinot Grigio and Chambourcin creates flavors of green apple and strawberry. 12% abv."
         />
    </>
    );
};

export default WineModal;