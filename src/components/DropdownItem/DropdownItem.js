import React from "react";
import "./DropdownItem.css";
import onionImg from "assets/images/onion.png";

function DropdownItem(props) {
  return (
    <div className="dropdown-item">
      <div className="dropdown-item-left">
        <img src={onionImg} alt="" />
        <p className="fs-15px weight-7 light-black">Onion</p>
      </div>
      <div className="dropdown-item-right">
        {props.included ? (
          <button className="included-btn">Inlcuded</button>
        ) : (
          <>
            <button className="dropdown-item-right-btn">+</button>
            <button className="dropdown-item-right-btn">-</button>
          </>
        )}
      </div>
    </div>
  );
}

export default DropdownItem;
