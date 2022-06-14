import "./style.css";
import logo from "./logo1.svg";

const Left = () => {
  return (
    <>
      <div className="frame">
        <ul className="list">
          <li className="items logotip">
            <img className="logo" src={logo} alt="" />
          </li>
          <li className="items list_elem">Video</li>
          <li className="items list_elem">Kutubxona</li>
          <li className="items list_elem">Jurnal</li>
          <li className="items list_elem">Admin</li>
        </ul>
      </div>
    </>
  );
};
export default Left;
