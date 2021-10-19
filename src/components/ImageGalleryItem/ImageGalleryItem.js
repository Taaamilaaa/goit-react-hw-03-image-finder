export const ImageGalleryItem = ({ imgS, imgL, onClick}) => {
    return (
 <li className="ImageGalleryItem" >
  <img src={imgS} alt="" onClick = {() => onClick(imgL)} className="ImageGalleryItem-image" />
</li>
    )
}