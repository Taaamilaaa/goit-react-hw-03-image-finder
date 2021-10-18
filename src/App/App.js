
import React from 'react';
import './App.css';
import { Searchbar } from '../components/Searchbar/Searchbar';
import {ImageGallery} from '../components/ImageGallery/ImageGallery'

class App extends React.Component {
  state = {
    status: "",
    value: "",

  }
  formSubmitHandle(value) {
    console.log(typeof(value));
    console.log(this.state.value);
  }
 
  render() {
    return (
       <>
       <Searchbar onSubmit={ this.formSubmitHandle}/>
        <ImageGallery/>
      </>
  );
  }
}

 


export default App;
