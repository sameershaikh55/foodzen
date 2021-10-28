import CircleCard from "components/CircleCard/CircleCard";
import "./BaseSearch.css";
import TitleBar from "components/TitleBar/TitleBar";
import Wrapper from "HOC/Wrapper/Wrapper";
import React from "react";
import foodImage from "assets/images/food.png";
import fImage from "assets/images/abc.png";
import arrowRight from "assets/images/icon-arrow-right.png";
import qorma from "assets/images/qorma.png";
import clock from "assets/images/clock.png";
import fire from "assets/images/fire.png";
import { Link } from "react-router-dom";

function BaseSearch() {
  return (
    <Wrapper
      bodyStyles={{
        padding: "2.08vw 5vw",
        marginTop: "72px",
        backgroundColor: "white",
      }}
      showSidebar={false}
      focus={true}
    >
      <div className="mb-50">
        <div className="mb-20">
          <TitleBar title="Top Cuisines" fontSize="fs-25px" weight="weight-7" />
        </div>
        <div className="cuisines-cards">
          {new Array(8).fill("").map((card, index) => (
            <CircleCard
              content={<img src={foodImage} alt="" />}
              title={<p className="fs-20px weight-6 black">French</p>}
              style={{ width: "114px", height: "114px" }}
            />
          ))}
        </div>
      </div>

      {/*  */}

      <div className="mb-50">
        <div className="mb-30">
          <TitleBar
            title="Top Ingredients"
            fontSize="fs-25px"
            weight="weight-7"
          />
        </div>
        <div className="cuisines-cards">
          {new Array(6).fill("").map((card, index) => (
            <CircleCard
              content={<img src={fImage} alt="" />}
              title={
                <p className="fs-20px weight-6 black row justify-between w-full align-center">
                  Oil <img src={arrowRight} alt="" />
                </p>
              }
              style={{ width: "169px", height: "95px", borderRadius: "20px" }}
              wrapperStyles={{ alignItems: "flex-start", gap: "5px" }}
            />
          ))}
        </div>
      </div>

      {/*  */}

      <div>
        <div className="mb-30">
          <TitleBar
            title="Popular Recipes"
            fontSize="fs-25px"
            weight="weight-7"
          />
        </div>
        <div className="popular-items">
          {new Array(8).fill("").map((card, index) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <CircleCard
                content={<img src={qorma} alt="" />}
                title={
                  <div>
                    <p className="fs-15px weight-6 black row justify-between w-full align-center mb-10 light-black">
                      Italian Sausage Pan Pizza
                    </p>
                    <div className="row" style={{ gap: "15px" }}>
                      <div className="row align-center" style={{ gap: "8px" }}>
                        <img src={fire} alt="" style={{ width: "10px" }} />
                        <p className="fs-9px light-black">100 KCal</p>
                      </div>
                      <div className="row align-center" style={{ gap: "8px" }}>
                        <img src={clock} alt="" style={{ width: "10px" }} />
                        <p className="fs-9px light-black">30 Min</p>
                      </div>
                    </div>
                  </div>
                }
                style={{
                  minWidth: "87.42px",
                  minHeight: "87.42px",
                  borderRadius: "50%",
                }}
                wrapperStyles={{
                  alignItems: "center",
                  gap: "10px",
                  flexDirection: "row",
                }}
              />
              <Link to="/" className="view-recipe-btn">
                View Recipe
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default BaseSearch;
