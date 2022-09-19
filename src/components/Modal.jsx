import React from "react";
import { useGlobalContext } from "../context";

function Modal() {
  const { selectedMeal, closeModal } = useGlobalContext();

  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-head">
          <div className="modal-meal-heading">
            <h1><b>{title}</b></h1>
          </div>
          <img src={image} alt={title} className="modal-img" />
        </div>
        <div className="modal-content">
        <p><span style={{fontSize:"25px"}}>Cooking Intrustion</span></p>
          <p>{text}</p>
          <a href={source} target="_blank">
            Original Source
          </a>
          <button className="btn btn-hipster close-btn" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
