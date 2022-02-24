import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './popup.styles.css';

const Popup = ({yesClickEvent,noClickEvent})=>(
  <div className="popup-box" onClick={noClickEvent}>
      <div className="confirmation-box">
          <h5 className="confirmation-text">Are you sure?</h5>
          <CustomButton className="confirmation-button" onClick={noClickEvent}>No</CustomButton>
          <CustomButton className="confirmation-button" onClick={yesClickEvent}>Yes</CustomButton>
      </div>
  </div>
);

export default Popup;