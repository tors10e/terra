import PhotoAlbum from "react-photo-album";
import "react-photo-album/styles.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { RowsPhotoAlbum, ColumnsPhotoAlbum, MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";
import "react-photo-album/columns.css";
import "react-photo-album/masonry.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import React, { useState } from 'react';
// import photos from "./PhotoList";
import getPhotoList from "./PhotoList";

export function PhotoGallery() {
    const [index, setIndex] = useState(-1);
    const photos = getPhotoList();

    return (
        <>        
        <h1>photo gallery</h1>
            <PhotoAlbum
            layout="columns"
            photos={photos} 
            // spacing={20}
            // targetRowHeight={300}
            onClick={({ index }) => setIndex(index)}
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
