import React, { Fragment } from "react";
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
          <a href="#" className="active">
            <i className="fas fa-exclamation-triangle text-white">
              <ImStatsBars />
            </i>
            <span className="links_name">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-exclamation-triangle text-white">
              <ImEnter />
            </i>
            <span className="links_name">Income</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-exclamation-triangle text-white">
              <ImExit />
            </i>
            <span className="links_name">Expense</span>
          </a>
        </li>

        <li className="log_out">
          <a href="#">
            <i className="fas fa-exclamation-triangle text-white">
              <ImCog />
            </i>
            <span className="links_name">Setting</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
