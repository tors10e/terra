import React from "react";
import PhotoAlbum from "react-photo-album";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "./index.css";

const photos = [
  {
    "src": "/images/079A0579.jpg",
    "width": 2400,
    "height": 1600
  },
 
  {
    "src": "/images/079A0593.jpg",
    "width": 2400,
    "height": 1600
  },
  {
    "src": "/images/079A0615.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A0625.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A0625.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A0718.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A0739.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A1015.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A1185.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A1642.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A1646.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A1976.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A2002.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A2008.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A4801.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A8978.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A9106.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A9134.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A9571.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A9584.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A9585.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A9604.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A9614.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A9888.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/IMG_0006.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/IMG_0072.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/IMG_0665.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/IMG_4061.jpeg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/IMG_9925.jpeg",
    "width": 800,
    "height": 600
  }
];

function PhotoGallery() {
  return (
    <div>
      <h1>Scenes from Terra</h1>
      <ColumnsPhotoAlbum photos={photos} />
    </div>
  );
}

export default PhotoGallery;