import axios from "axios";

const API_KEY = "key=23114127-913a50287ab6c0ea340feb686";
const BASE_URL = "https://pixabay.com/api/";


export function pixabayFetch(searchValue, page) {
  
  const query = `?q=${searchValue}&page=${page}&${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`

  const url = `${BASE_URL}${query}`
   return axios
      .get(url)
      .then((r) => console.log(r))
      .catch((err) => console.log(err));
    
}










// export class PixabayFetch {
//   constructor(base_url, key) {
//     this.base_url = "https://pixabay.com/api/";
//     this.key = "23114127-913a50287ab6c0ea340feb686";
//     this._queryValue = "";
//     this.page = 1;
//     };
    
//   get queryValue() {
//     return this._queryValue;
//     };
    
//    set queryValue(searchValue) {
//    return (this._queryValue = searchValue);
//     };

//     searchImages() {
//         let params = `?q=${this.queryValue}&page=${this.page}&image_type=photo&orientation=horizontal&per_page=12`;
//         let url = this.base_url + params + this.key;
//     return axios
//       .get(url)
//       .then((r) => console.log(r))
//       .catch((err) => console.log(err));
//     };
// }
