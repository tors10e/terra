import React from "react";
import Bsmodal from '../components/bsmodal';
import Image from 'react-bootstrap/Image'
import cab_label from '../images/bottle_labels/cab_sav_214x300.jpg';
import cardinal_label from '../images/bottle_labels/cardinal_214x300.jpg';
import celestial_label from '../images/bottle_labels/celestial_214x300.jpg';
import compass_label from '../images/bottle_labels/compass_214x300.jpg';
import triangulation_label from '../images/bottle_labels/triangulation_214x300.jpg';
import true_north_label from '../images/bottle_labels/true_north_214x300.jpg';
import meridian_label from '../images/bottle_labels/meridian_214x300.jpg';


function Wines(props) {
    return(
            <div class="topic topic-even section-heading">
                <h2 id="wines">Wines</h2>
                <p>We have a wide variety of wines from dry Cabernet Sauvignon to sweet berry wines so that we have something for everyone. </p>
                    <div class="row">
        <Bsmodal
            image_src={triangulation_label}
            button_text="Click for more information"
            title_text="Triangulation"
            body_text="Notes of plum, black cherry and tobacco meld to create a medium body and lightly oaked red wine that's perfect for settling into a relaxing evening."
         />
        <Bsmodal
            image_src={cab_label}
            button_text="Click for more information"
            title_text="Cabernet Sauvignon"
            body_text="Notes of plum, black cherry and tobacco meld to create a medium body and lightly oaked red wine that's perfect for settling into a relaxing evening."
         />
        <Bsmodal
            image_src={cardinal_label}
            button_text="Click for more information"
            title_text="Cardinal Direction"
            body_text="Notes of plum, black cherry and tobacco meld to create a medium body and lightly oaked red wine that's perfect for settling into a relaxing evening."
         />
        <Bsmodal
        image_src={compass_label}
            button_text="Compass Rose"
            title_text="Compass Rose"
            body_text="Medium dry blend of Pinot Grigio and Chambourcin creates flavors of green apple and strawberry. 12% abv."
         />
         <Bsmodal
            image_src={meridian_label}
            button_text="White Meridian"
            title_text="White Meridian"
            body_text="100% stainless steel fermentation. Hints of honeysuckle, dried apricot and ripe apple. 12% abv."
         />
        <Bsmodal
            image_src={true_north_label}
            button_text="True North"
            title_text="True North"
            body_text="100% stainless steel fermentation. Hints of honeysuckle, dried apricot and ripe apple. 12% abv."
         />
        <Bsmodal
            image_src={celestial_label}
            button_text="Celestial Spheres"
            title_text="Celestial Spheres"
            body_text="100% stainless steel fermentation. Hints of honeysuckle, dried apricot and ripe apple. 12% abv."
         />
         </div>
</div>

    );
};

export default Wines;