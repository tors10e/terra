import PhotoAlbum from "react-photo-album";
import "react-photo-album/rows.css";


const photos = [
 
  {
    "src": "images/gallery/079A1642.jpg",
        "width": 800,
    "height": 600
  },
  {
    "src": "images/gallery/079A1646.jpg",
        "width": 800,
    "height": 600
  },
  {
    "src": "images/gallery/079A1976.jpg",
    "width": 800,
    "height": 600
  },
  {
    "src": "images/gallery/079A2002.jpg",
    "width": 800,
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

export function PhotoGallery() {
    return (
<div>
        <h1>photo gallery</h1>
        <PhotoAlbum layout="rows" photos={photos} 
         spacing={20}
        targetRowHeight={200}
        rowConstraints={(containerWidth) => ({ maxPhotos: containerWidth < 600 ? 1 : 4 })}
      />
     </div>
    )
}

