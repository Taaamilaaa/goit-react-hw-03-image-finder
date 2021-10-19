import React from "react";

export class Searchbar extends React.Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.value.trim() === "") {
      return alert("Please, enter your query!");
    }
    this.props.onSubmit(this.state.value);
   this.setState({
      value: "",
    });
  };
 
  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            value={this.state.value}
            name="value"
            //   autoComplete="off"
            //   autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
