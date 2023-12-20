import React from "react";
import "../Home/Home_1.css";
import MainImage from "../../assets/Home/mainimg-1.png";
const Home_1 = () => {
  const categories = [
    "Drug Shops",
    "Super Marts",
    "Super Stores",
    "Restaurants",
    "Retail",
    "Workshops",
  ];

  const renderCategories = () =>
    categories.map((category, index) => (
      <React.Fragment key={index}>
        <span className="category">{category}</span>
        {index < categories.length - 1 && <span className="separator">~</span>}
      </React.Fragment>
    ));
  return (
    <>
      <div className="home_1-mainimg">
        <img src={MainImage} alt="none" className="home-mainimage" />
        {/* <h2 className="home_1-head" style={{ textAlign: "center" }}>
          Our Clients
        </h2> */}
      </div>
      <div className="marquee-container">
        <div className="marquee">
          {renderCategories()}
          {renderCategories()}
        </div>
      </div>
    </>
  );
};

export default Home_1;
