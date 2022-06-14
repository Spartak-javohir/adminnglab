import Left from "../left/left";
import Rigth from "../rigth/rigth";
import logo from "./logo1.svg";
import "./style.css";
const Body = () => {
  return (
    <section className="body">
      <div className="container">
        <div className="box">
          <nav className="navbar_rigth">
            <div className=" logotip">
              <img className="logo" src={logo} alt="" />
            </div>
            <div className="name">
              <h2>Name</h2>
            </div>
          </nav>
          <div className="elements">
            <Left />
            <Rigth />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
