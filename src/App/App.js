
import React from 'react';
import './App.css';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { ImageGallery } from '../components/ImageGallery/ImageGallery'




class App extends React.Component {
  state = {
    
    value: "",

  }
  formSubmitHandle(data) {
    if (data.trim() !== '') {
    this.setState({ value: data });
   }
    
   
    
  }
 
  render() {
    return (
       <>
       <Searchbar onSubmit={ this.formSubmitHandle}/>
        <ImageGallery value={ this.state.value}/>
      </>
  );
  }
}

 


export default App;
