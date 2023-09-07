import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingHeart, faDollarSign, faSeedling } from "@fortawesome/free-solid-svg-icons";

function Quality() {
  return (
    <div className="d-flex justify-content-around">
      <div className="quality-item">
        <FontAwesomeIcon icon={faHandHoldingHeart} className="icon-quality" />
        <p className="quality-caption">Uncompromised Quality</p>
      </div>
      <div className="quality-item">
        <FontAwesomeIcon icon={faDollarSign} className="icon-quality" />
        <p className="quality-caption">Best Price Guaranteed</p>
      </div>
      <div className="quality-item">
        <FontAwesomeIcon icon={faSeedling} className="icon-quality" />
        <p className="quality-caption">Naturally Sourced</p>
      </div>
    </div>
  );
}

export default Quality;

