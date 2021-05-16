import React from "react";

function Nav() {
  function cargarRandom() {
    alert("RANDOM");
  }
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">
            GIPHY APP
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="nav ml-auto">
            <li class="nav-item">
              <button class="btn btn-success" onClick={cargarRandom}>
                Cargar random
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
