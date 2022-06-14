import "./adminStyle.css";

const AdminElem = () => {
  return (
    <div className="ramka">
      <div className="container-sm">
        <header className="header">
          <form className="add_admin_form" action="">
            <label className="add_admin_label" htmlFor="">
              <input
                className="add_admin_input"
                type="email"
                required
                placeholder="Email@mail.com"
              />
            </label>
            <label className="add_admin_label" htmlFor="">
              <button className="add_admin_button">+</button>
            </label>
          </form>
        </header>
        <ul className="admins-list">
          <li>admin</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminElem;
