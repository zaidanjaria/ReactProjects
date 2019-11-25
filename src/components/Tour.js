import React, { Component } from "react";

class Tour extends Component {
  state = {
    showInfo: true
  };

  toggleShowinfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };
  render() {
    const { tour } = this.props;
    return (
      <div class="card" style={{ width: "15rem" }}>
        <img
          src={tour.img}
          class="card-img-top"
          alt="Image Error"
          height="180rem"
        />
        <div class="card-body">
          <h4 class="card-title">{tour.city.toUpperCase()} </h4>
          <h5 class="card-text">{tour.name}</h5>
          Info{" "}
          <span onClick={this.toggleShowinfo}>
            <i class="fa fa-get-pocket"></i>
          </span>
          {this.state.showInfo && (
            <p class="card-text text-muted">{tour.info}</p>
          )}
        </div>
      </div>
    );
  }
}

export default Tour;
