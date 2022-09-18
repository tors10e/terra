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


export const photos = [
  {
    src: casey_flowers,
    width: 4,
    height: 5
  },
  {
    src: emily_fishbone_porch,
    width: 4,
    height: 4
  },
  {
    src: pooja_vines,
    width: 4,
    height: 3
  },
  {
    src: rowe170,
    width: 3,
    height: 4
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
    width: 4,
    height: 4
  },
  {
    src: emily_foggy,
    width: 4,
    height: 3
  },
  {
    src: casey_vines,
    width: 4,
    height: 3
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
    src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
    width: 4,
    height: 3
  }
];


function WeddingGallery() {
    return (
    <Gallery photos={photos} />
    );
};


export default WeddingGallery;