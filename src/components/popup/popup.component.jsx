import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import './popup.styles.css';

const Popup = ({yesClickEvent,noClickEvent})=>(
  <div>
      <div>
          <h5>Are you sure?</h5>
          <CustomButton onClick={noClickEvent}>No</CustomButton>
          <CustomButton onClick={yesClickEvent}>Yes</CustomButton>
      </div>
  </div>
);

export default Popup;