
import React from 'react';
import './App.css';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { ImageGallery } from '../components/ImageGallery/ImageGallery'




class App extends React.Component {
  state = {
    value: "",
  }
  formSubmitHandle(value) {
    console.log(value);
    if (value.trim() === '') {
      return
    }
    this.setState({ value})
  }
 
  render() {
    return (
       <>
       <Searchbar onSubmit={ this.formSubmitHandle}/>
        {/* <ImageGallery searchValue={ this.state.value}/> */}
      </>
  );
  }
}

 


export default App;
