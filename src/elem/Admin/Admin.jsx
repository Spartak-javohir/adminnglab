import AdminElem from "../Admin-elem/adminElem";
import "./style.css";
const Admin = () => {
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
            <AdminElem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
