
import React from 'react';
import './App.css';
import { Searchbar } from '../Searchbar/Searchbar';
import {ImageGallery} from '../ImageGallery/ImageGallery'

class App extends React.Component {
  state = {
    status: "",
    value: "",

  }
  formSubmitHandle(value) {
    this.setState({ value });
  }
  render() {
    return (
       <>
       <Searchbar onSubmit={ this.formSubmitHandle}/>
        <ImageGallery value={this.state.value} />
      </>
  );
  }
}

 


export default App;
