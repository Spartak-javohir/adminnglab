import Left from "../left/left";
import Rigth from "../rigth/rigth";
import "./style.css";
const Body = () => {
  return (
    <section className="body">
      <div className="container">
        <div className="box">
          <Left />
          <Rigth />
        </div>
      </div>
    </section>
  );
};

export default Body;
