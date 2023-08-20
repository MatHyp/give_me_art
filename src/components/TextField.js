import "../styles/TextField.css";

function TextField() {
  return (
    <div class="container">
      <input
        type="text"
        class="input-field"
        placeholder="What do you want to create?"
      />
      <button class="submit-button">
        <span class="icon">
          <img src={require("../assets/icon-pen.png")} />
        </span>
      </button>
    </div>
  );
}

export default TextField;
