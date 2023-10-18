import { useState } from "react";
/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

function Image({ src, onRemove }) {
  return (
    <div className="image">
      <img src={src} alt="" />
      <button className="remove" onClick={() => onRemove(src)}>
        X
      </button>
    </div>
  );
}

export function ImageGallery({ links }) {
  const [images, setImages] = useState(links);

  const handleRemove = (src) => {
    setImages(images.filter((link) => src !== link));
  };

  return (
    <div>
      {images?.map((link) => (
        <Image key={link} src={link} onRemove={handleRemove}></Image>
      ))}
    </div>
  );
}
