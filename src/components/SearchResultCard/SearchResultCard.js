import React from "react";
import "./SearchResultCard.css";
import crossIcon from "assets/images/cross-icon.png";

function SearchResultCard(props) {
  return (
    <div className="search-result-card">
      <p className="fs-16px weight-5 light-black">{props.value}</p>
      <div className="cross-icon">
        <img src={crossIcon} alt="" />
      </div>
    </div>
  );
}

export default SearchResultCard;
