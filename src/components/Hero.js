import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img src={require("../assets/logo.png")} />
      <h2>
        <span className="hero-span">Generate your ART</span> <br /> by typing in
        field below any words that comes to your mind!
      </h2>

      <div className="progress-line">
        <div className="progress-line-flex">
          <div className="progress-level">
            <div
              className="point"
              style={{ color: "white" }}>
              1
            </div>
            <p style={{ color: "#CE2B28" }}>Generate image</p>
          </div>
          <div className="progress-level">
            <div
              className="point"
              style={{ backgroundColor: "#C0C1C9" }}>
              2
            </div>
            <p style={{ color: "#C0C1C9" }}>Generate image</p>
          </div>
          <div className="progress-level">
            <div
              className="point"
              style={{ backgroundColor: "#C0C1C9" }}>
              3
            </div>
            <p style={{ color: "#C0C1C9" }}>Generate image</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
