import React from "react";
import PhotoAlbum from "react-photo-album";
import { ColumnsPhotoAlbum } from "react-photo-album";
import "./index.css";

const photos = [
 
  {
    "src": "/images/079A1642.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A1646.jpg",
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
    "src": "/images/079A4801.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A8978.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A9106.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A9134.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/079A9571.jpg",
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
    "src": "/images/079A9604.jpg",
    "width": 800,
    "height": 600
  },

  {
    "src": "/images/079A9888.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/IMG_0006.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/IMG_0072.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/IMG_0665.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/IMG_4061.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "/images/IMG_9925.jpg",
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