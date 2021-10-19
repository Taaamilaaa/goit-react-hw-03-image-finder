import React from "react";
import "./App.css";
import { Searchbar } from "../components/Searchbar/Searchbar";
import { ImageGallery } from "../components/ImageGallery/ImageGallery";
import { pixabayFetch } from "../Services/pixabay";
import { Button } from "../components/Button/Button";
import { Modal } from "../components/Modal/Modal";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import {Loader} from '../components/Loader/Loader'

class App extends React.Component {
  state = {
    value: "",
    page: 1,
    images: [],
    isLoading: false,
    modalIsOpen: false,
    bigImg: "",
  };
  formSubmitHandle = (value) => {
    this.setState({ value });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      this.fetchImages();
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  fetchImages = () => {
    const options = {
      query: this.state.value,
      page: this.state.page,
    };

    this.setState({ isLoading: true });

    pixabayFetch(options).then((images) => {
      if (!images.length) {
        alert("There are any pictures(( ");
      }
      this.setState((prevState) => {
        return {
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        };
      });
    });
    this.setState({ isLoading: false });
  };
  imgBig = (img) => {
    this.setState({ modalIsOpen: true });
    this.setState({ bigImg: img });
    console.log(this.state.bigImg);
  };
  modalClose = (e) => {
    if (e.currentTarget === e.target) {
      this.setState({ modalIsOpen: false });
    }
  };

  render() {
    return (
      <div className="Container">
        <Searchbar onSubmit={this.formSubmitHandle} />

        <ImageGallery images={this.state.images} onClick={this.imgBig} />
        {this.state.images.length > 0 && (
          <Button text={"load more"} onClick={this.fetchImages} />
        )}
        {this.state.modalIsOpen === true && (
          <Modal img={this.state.bigImg} onClick={this.modalClose} />
        )}
      </div>
    );
  }
}

export default App;
