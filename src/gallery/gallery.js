import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import image1 from "../images/gallery_photos/079A0579.jpeg";
import image2 from "../images/gallery_photos/079A0581.jpeg";

const photos = [
    { src: image1, width: 800, height:600   },
    { src: image2, width: 800, height:600   },
];

function PhotoGallery() {
    return (
      <div>
        <h1>Scenes from Terra</h1>
        <RowsPhotoAlbum photos={photos} />
      </div>
    );
  }
  
  export default PhotoGallery;