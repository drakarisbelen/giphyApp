import React, { Component } from "react";
import Features from "./Features";
class Gif extends Component {
  constructor() {
    super();
    this.state = {
      gifGroup: [],
    };
  }

  apiCall(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ gifGroup: data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
    let url =
      "https://api.giphy.com/v1/gifs/trending?api_key=6tqVfpipa0aVndF25t0jQ05bwjcSjpeV";

    this.apiCall(url);
    // fetch(
    //   "https://api.giphy.com/v1/gifs/trending?api_key=6tqVfpipa0aVndF25t0jQ05bwjcSjpeV"
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     this.setState({ gifGroup: data.data });
    //   })
    //   .catch((e) => {});
  }

  componentDidUpdate() {
    //alert("Fin ciclo de actualizacion");
    console.log("componentdidUpdate");
  }

  render() {
    // {
    //   console.log("RENDER: ", this.state.gifGroup);
    //   this.state.gifGroup.map((data, index) =>
    //     console.log("rende: ", data.images.fixed_width_small.url)
    //   );
    // }

    return (
      <div>
        <div className="container">
          <div className="row text-center">
            {this.state.gifGroup.map((dato, index) => (
              //<img key={index} src={dato.images.fixed_width_small.url}></img>
              <Features
                title={dato.username}
                img={dato.images.fixed_width_small.url}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Gif;
