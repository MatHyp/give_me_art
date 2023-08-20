import "../styles/StylePreview.css";

function StylePreview() {
  return (
    <div class="style-preview">
      <div className="left-box">
        <p>Style pewview</p>

        <img src={require("../assets/avatar.png")} />
      </div>
      <div className="right-box">
        <p>MINIMALISTIC</p>
        <button>CARTOON</button>
        <div>
          <img src={require("../assets/padlock-icon.png")} />
          <p>ARTISTIC</p>
        </div>
      </div>
    </div>
  );
}

export default StylePreview;
