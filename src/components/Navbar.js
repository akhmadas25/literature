import React, { useContext, useEffect } from "react";
import logo from "../assets/image/icon.png";
import { UserContext } from "../context/userContext";
import { Redirect, useHistory } from "react-router";
import logout from "../assets/icon/logout.png";
import "../assets/stylesheets/home.css";
import { Link } from "react-router-dom";


function Navbar() {
  const history = useHistory();
  const [state, dispatch] = useContext(UserContext);
  const Logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };
  useEffect(() =>{
    console.log(state);
  },[])

  if (state.user.status === "admin") {
    return (
      <div>
        <nav class="navbar navbar-admin navbar-dark bg-dark px-5">
          <div class="navbar-nav">
            <img src={logo} alt={logo} style={{ height: 50 }} />
          </div>
          <div class="dropdown me-5">
            <a
              class="text-decoration-none dropdown-toggle"
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                class="rounded-circle"
              />
            </a>
            <ul
              class="dropdown-menu text-small"
              aria-labelledby="dropdownUser1"
            >
              <li>
                <a class="dropdown-item" onClick={Logout}>
                  <img src={logout} style={{ height: 20 }} className="me-2" />
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <nav class="navbar navbar-user navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="navbar-nav">
          <a class="nav-link" onClick={() => window.location="/profile"}>
              Profile
            </a>
            <a class="nav-link" onClick={() => window.location="/myCollection"}>
              My Collection
            </a>
            <a class="nav-link" onClick={() => history.push("/addLiteratur")}>
              Add Literatur
            </a>
            <a class="nav-link" onClick={Logout}>
              Logout
            </a>
          </div>
          <div className="text-end">
            <img
              src={logo}
              alt={logo}
              style={{ height: 50 }}
              onClick={() => history.push("/home")}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
