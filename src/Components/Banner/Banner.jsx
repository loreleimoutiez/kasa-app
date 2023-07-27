import React from "react";

const Banner = ({ showTitle = true, bannerImage }) => {
  return (
    <div className={`banner ${bannerImage}`}>
      <div className="logo" />
      <div className="background" />
      {showTitle && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  );
};

export default Banner;