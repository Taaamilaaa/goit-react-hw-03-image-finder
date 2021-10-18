import React from 'react';
import { pixabayFetch } from "../../Services/pixabay";
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem"


export class  ImageGallery  extends React.Component {
    state = {
        value: this.prop.searchValue,
        page: 1,
        images: [],
    }
    fetchImages() {
        pixabayFetch(this.state.value, this.state.page);
}
    render() {
      return (<ul className="ImageGallery">
<ImageGalleryItem/>
        </ul>)
    }
}


// export function ImageGallery({ value }) {
//     let page = 1;

//     pixabayFetch(value, page).then(r =>console.log(r));

//     return (
//         <ul className="ImageGallery">
//             {/* { 
//                 r.map((el) => {
//                     const { id, webformatURL, largeImageURL } = el;
//                     return (
//                         <li key={id}>
//                             <img src = {webformatURL} alt = {id}></img>
//                         </li>
//                     )
//         )
        
//     })} */}
  
// </ul>
//     )
// }