import { pixabayFetch } from "../../Services/pixabay";

export function ImageGallery({ value }) {
    let page = 1;

    pixabayFetch(value, page);

    return (
        <ul className="ImageGallery">
  
</ul>
    )
}