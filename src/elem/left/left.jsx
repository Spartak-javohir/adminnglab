import "./style.css";
import logo from "./logo1.svg";

const Left = () => {
  return (
    <>
      <div className="frame">
        <ul className="list">
          <li className="items">
            <img src={logo} alt="" />
          </li>
          <li className="items">Video</li>
          <li className="items">Kutubxona</li>
          <li className="items">Jurnal</li>
          <li className="items">Admin</li>
        </ul>
      </div>
    </>
  );
};
export default Left;
