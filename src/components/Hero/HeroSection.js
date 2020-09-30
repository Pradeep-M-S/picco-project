import React from "react";
import "./HeroSection.css";
function HeroSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  headline2,
  description,
  img,
  alt,
  imgStart,
  paddingAmount,
  extraPadding,
}) {
  return (
    <div
      className={lightBg ? "home__hero-section" : "home__hero-section darkBg"}
    >
      <div
        className={
          paddingAmount === "little" ? "small-padding" : "extra-padding"
        }
      >
        <div className={`${extraPadding ? "extra" : ""} container`}>
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <h4
                  className={
                    lightText ? "heading heading2" : "heading heading2 dark"
                  }
                >
                  {headline2}
                </h4>

                <p
                  className={
                    lightTextDesc
                      ? "home__hero-subtitle"
                      : "home__hero-subtitle dark "
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper">
                <img src={img} alt={alt} className="home__hero-img" />
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default HeroSection;
