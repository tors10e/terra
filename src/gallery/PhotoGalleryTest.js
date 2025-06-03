import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import React, { useState } from 'react';

const photos = [
 
  {
    "src": "images/gallery/079A1642.jpg",
    "width": 1600,
    "height": 1200,
    "title": "A beautiful sunset over the mountains",
    "alt": "Sunset over mountains",
    "label": "Sunset",
  },
  {
    "src": "images/gallery/079A1646.jpg",
        "width": 800,
    "height": 600
  },
  {
    "src": "images/gallery/079A1976.jpg",
    "width": 1200,
    "height": 800
  },
  {
    "src": "images/gallery/079A2002.jpg",
    "width": 1200,
    "height": 600
  },
  {
    "src": "images/gallery/079A4801.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "images/gallery/079A8978.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "images/gallery/079A9106.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "images/gallery/079A9134.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "images/gallery/079A9571.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "images/gallery/079A9584.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "images/gallery/079A9585.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "images/gallery/079A9604.jpg",
    "width": 800,
    "height": 600
  },

  {
    "src": "images/gallery/079A9888.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "images/gallery/IMG_0006.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "images/gallery/IMG_0072.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "images/gallery/IMG_0665.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "images/gallery/IMG_4061.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "images/gallery/IMG_9925.jpg",
    "width": 800,
    "height": 600
  }
];


export function ColumnsPhotoAlbum() {
    const [index, setIndex] = useState(-1);

    return (
        <>        
        <h1>photo gallery</h1>
            <PhotoAlbum 
            layout="columns"
            photos={photos} 
            spacing={20}
            targetRowHeight={300}
            onClick={({ index }) => setIndex(index)}
            // rowConstraints={(containerWidth) => ({ maxPhotos: containerWidth < 600 ? 1 : 4 })}
        />
        <Lightbox
            index={index}
            slides={photos}
            open={index >= 0}
            close={() => setIndex(-1)}
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </>
        );
}
