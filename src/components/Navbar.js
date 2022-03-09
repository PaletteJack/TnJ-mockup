import React from "react";

export default function Navbar(props) {
  return (
    <div className="navbar">
      <img id="Logo" src="/images/t&j.png" alt="Logo" />
      <div onClick={props.toggler} className="menuButton"></div>
      <ul id="nav-list" className={props.condition ? "show" : null}>
        <li className="list-item">
          <h1
            id="about"
            onClick={props.condition ? props.altFunction : props.function}
          >
            About
          </h1>
        </li>
        <li className="list-item-next">
          <h1
            id="tickets"
            onClick={props.condition ? props.altFunction : props.function}
          >
            Tickets
          </h1>
        </li>
        <li className="list-item">
          <h1
            id="locations"
            onClick={props.condition ? props.altFunction : props.function}
          >
            Locations
          </h1>
        </li>
        <li className="list-item-next">
          <h1
            id="merch"
            onClick={props.condition ? props.altFunction : props.function}
          >
            Merch
          </h1>
        </li>
      </ul>
    </div>
  );
}
