import React, { Component } from "react";
import logo from "../logo.png";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img src={logo}></img>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-5">
          <li class="nav-item active mx-3">
            <a class="nav-link" href="#">
              <b> Home </b>
            </a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link" href="#">
              Features
            </a>
          </li>
          <li class="nav-item mx-3">
            <a class="nav-link" href="#">
              Pricing
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
