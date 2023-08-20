import "../styles/NavBar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="navbar-flex">
        <img src={require("../assets/menu.png")} />
        <div className="right-icons">
          <img src={require("../assets/hearth.png")} />
          <img src={require("../assets/shop-basket.png")} />
          <img src={require("../assets/account.png")} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
