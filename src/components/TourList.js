import React, { Component } from "react";
import "./TourList.css";
import Tour from "./Tour";
import { tourData } from "../components/tourData";

class TourList extends Component {
  state = {
    tours: tourData
  };
  render() {
    console.log("state", this.state);
    var { tours } = this.state;
    return (
      <section className="tourlist">
        <div class="card-deck">
          {tours.map(tour => {
            return (
              <div>
                <Tour key={tour.id} tour={tour} />
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default TourList;
