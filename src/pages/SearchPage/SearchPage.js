import React from "react";
import "./SearchPage.css";
import DropDown from "components/DropDown/DropDown";
import TitleBar from "components/TitleBar/TitleBar";
import Wrapper from "HOC/Wrapper/Wrapper";
import DishCard from "components/DishCard/DishCard";
import SearchResultCard from "components/SearchResultCard/SearchResultCard";
import filterIcon from "assets/images/filter.png";
import dropdownCrossIcon from "assets/images/cross-icon.png";
import { Link } from "react-router-dom";

function SearchPage() {
  const [show, setshow] = React.useState(false);
  const dropdownSidebarRef = React.useRef();
  let searchResult = [
    // {
    //   id: 23572,
    //   value: "Onion",
    // },
  ];

  React.useEffect(() => {
    let handler = (e) => {
      if (!dropdownSidebarRef.current.contains(e.target)) {
        setshow(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <Wrapper
      bodyStyles={{
        padding: "15px 0",
        paddingLeft: "clamp(15px,2.35vw,31px)",
        paddingRight: "clamp(15px,2.35vw,31px)",
        marginTop: "72px",
      }}
    >
      <div className="dropdowns-wrapper">
        <div
          className={`dropdowns ${show ? "show" : ""} mb-30`}
          ref={dropdownSidebarRef}
        >
          <img
            onClick={() => setshow(false)}
            className="dropdown-cross-icon"
            src={dropdownCrossIcon}
            alt=""
          />
          <DropDown btnTitle="Ingredients" />
          <DropDown btnTitle="Cuisine" />
          <DropDown btnTitle="Ingredients Group" />
          <DropDown btnTitle="Difficulty" />
          <DropDown btnTitle="Time" />
          <DropDown btnTitle="Category" position="right" />
          <DropDown btnTitle="Course" position="right" />
        </div>
        <div className="filter-icon" onClick={() => setshow(!show)}>
          <img src={filterIcon} alt="" />
        </div>
      </div>

      <div>
        <div className="mb-30">
          {searchResult.length > 0 ? (
            <div className="search-result-bar">
              <p className="fs-20px weight-6">Results 23572 : </p>
              <div className="serach-result-card-wrapper">
                {searchResult.map((card, index) => (
                  <SearchResultCard key={card.id} value={card.value} />
                ))}
              </div>
            </div>
          ) : (
            <TitleBar
              title="Popular Recipes To Satify your Cravings"
              fontSize="fs-20px"
              weight="weight-5"
            />
          )}
        </div>

        <div className="dishes">
          {new Array(12).fill("").map((card, index) => (
            <Link to="/" style={{ color: "inherit" }}>
              <DishCard />
            </Link>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default SearchPage;
