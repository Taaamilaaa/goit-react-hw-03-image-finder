import React from "react";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

export const ImageGallery = ({ images, onClick}) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL }) => {
        return <ImageGalleryItem key={id} imgL = {largeImageURL} imgS={webformatURL} onClick={onClick} />
      })}
      
    </ul>
  );
}
