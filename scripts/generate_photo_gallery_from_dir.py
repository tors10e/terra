import os

class ReactPhotoGalleryGenerator:
    def __init__(self, image_dir, output_file="PhotoGallery.js"):
        self.image_dir = image_dir
        self.output_file = output_file

    def get_images(self):
        """Retrieve image filenames from the directory."""
        valid_extensions = {'.jpg', '.jpeg', '.png', '.gif', '.webp'}
        return [f for f in os.listdir(self.image_dir) if os.path.splitext(f)[1].lower() in valid_extensions]

    def generate_react_component(self):
        """Generate a React component for displaying the images in a gallery."""
        images = self.get_images()
        if not images:
            print("No images found in the specified directory.")
            return
        
        # Generate image array
        image_entries = [f"{{ src: '/images/{img}', width: 4, height: 3 }}" for img in images]
        images_js = "[" + ",\n    ".join(image_entries) + "]"
        
        # React component template
        react_component = f"""import React from 'react';
import Gallery from 'react-photo-gallery';

const photos = {images_js};

const PhotoGallery = () => {{
    return (
        <div>
            <h2>Photo Gallery</h2>
            <Gallery photos={{photos}} />
        </div>
    );
}};

export default PhotoGallery;"""
        
        # Write to file
        with open(self.output_file, "w") as f:
            f.write(react_component)
        print(f"React photo gallery component generated: {self.output_file}")

# Example usage
# generator = ReactPhotoGalleryGenerator("./images")
# generator.generate_react_component()
