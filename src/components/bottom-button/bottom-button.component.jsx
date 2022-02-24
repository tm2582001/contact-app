import React from "react";
import './bottom-button.styles.css';
import {ReactComponent as PlusIcon} from '../../assets/plus-solid.svg';

const BottomButton = ()=>(
    <div className="bottom-button">
        <PlusIcon className="plus-icon"/>
    </div>
);

export default BottomButton;