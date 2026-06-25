import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import './Header.css'

function Header() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    setIsLoggedIn(false);

    navigate("/admin");
  }

  return (
    <header className="admin-header">
      <div className="header-left">
        <h2>KUCCPS Admin Portal</h2>
      </div>

      <div className="header-right">
        <button
          type="button"
          onClick={handleLogout}
          className="logout-btn"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

export default Header;