import React from 'react';
import Gallery from "react-photo-gallery";
import casey_flowers from "../images/event_photos/casey_flowers.jpg";
import blueridge_arbor from "../images/event_photos/blueridge_arbor.jpg";
import casey_vines from "../images/event_photos/casey_vines.jpg";
import emily_backlit from "../images/event_photos/emily_backlit.jpg";
import emily_fishbone_porch from "../images/event_photos/emily_fishbone_porch.jpg";
import emily_foggy from "../images/event_photos/emily_foggy.jpg";
import pooja_vines from "../images/event_photos/pooja_vines.jpg";
import rowe170 from "../images/event_photos/Rowe-0170.jpg";
import rowe237 from "../images/event_photos/Rowe-0237.jpg";
import rowe503 from "../images/event_photos/Rowe-0503.jpg";
import table_layout from "../images/event_photos/table_layout.jpg";
import anna_claire_dalton_landscape from "../images/event_photos/anna_claire_dalton_landscape.jpg";
import arbor_artifact from "../images/event_photos/arbor_artifact.jpg";
import brian_emily_vows from "../images/event_photos/brian_emily_vows.jpg";
import lighted_jar_pavilion from '../images/event_photos/lighted_jar_pavilion.jpg';
import brian_emily_toast from "../images/event_photos/brian_emily_toast.jpg";
import pavilion_glow from '../images/event_photos/pavilion_glow.jpg';
import arbor_day_view from '../images/event_photos/arbor_day_view.jpg';
import blood_mtn_sunset from '../images/event_photos/blood_mtn_sunset.jpg';
import ryan_rosie_sunset from '../images/event_photos/ryan_rosie_sunset.jpg';
import flowery_arbor from '../images/event_photos/flowery_arbor.jpg';


export const photos = [
  {
    src: casey_flowers,
    width: 4,
    height: 5
  },
  {
    src: emily_fishbone_porch,
    width: 3648,
    height: 5472
  },
  {
    src: pavilion_glow,
    width: 4,
    height: 3
  },
  {
    src: ryan_rosie_sunset,
    width: 1284,
    height: 1870
  },
  {
    src: blueridge_arbor,
    width: 5,
    height: 4
  },
  {
    src: emily_backlit,
    width: 4,
    height: 3
  },
  {
    src: rowe237,
    width: 6016,
    height: 4016
  },
  {
    src: rowe503,
    width: 3,
    height: 4
  },
  {
    src: table_layout,
    width: 4,
    height: 3
  },
  {
    src: anna_claire_dalton_landscape,
    width: 2500,
    height: 1677
  },
  {
    src: arbor_artifact,
    width: 4,
    height: 3
  },
  {
    src: brian_emily_vows,
    width: 4,
    height: 3
  },

    {
    src: pooja_vines,
    width: 4,
    height: 3
  },
  {
    src: brian_emily_toast,
    width: 4,
    height: 3
  },
  {
    src: flowery_arbor,
    width: 3701,
    height: 2775
  },
    {
    src: blood_mtn_sunset,
    width: 3305,
    height: 1268
  },
    {
    src: emily_foggy,
    width: 4,
    height: 3
  },
    {
    src: lighted_jar_pavilion,
    width: 4,
    height: 3
  },
    {
    src: rowe170,
    width: 3,
    height: 4
  },
];


function WeddingGallery() {
    return (
    <Gallery photos={photos} />
    );
};


export default WeddingGallery;