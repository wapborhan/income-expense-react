import React from "react";
import { Link } from "react-router-dom";
import {
  ImCoinDollar,
  ImStatsBars,
  ImEnter,
  ImExit,
  ImCog,
} from "react-icons/im";

const Sidebar = () => {
  return (
    <div className="sidebars bg-dark text-light">
      <div className="logo-details">
        <ImCoinDollar />
        <span className="logo_name">SR BOOK</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="active">
            <i className="fas fa-exclamation-triangle text-white">
              <ImStatsBars />
            </i>
            <span className="links_name">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/income">
            <i className="fas fa-exclamation-triangle text-white">
              <ImEnter />
            </i>
            <span className="links_name">Income</span>
          </Link>
        </li>
        <li>
          <Link to="/expense">
            <i className="fas fa-exclamation-triangle text-white">
              <ImExit />
            </i>
            <span className="links_name">Expense</span>
          </Link>
        </li>

        <li className="log_out">
          <Link to="/setting">
            <i className="fas fa-exclamation-triangle text-white">
              <ImCog />
            </i>
            <span className="links_name">About</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
