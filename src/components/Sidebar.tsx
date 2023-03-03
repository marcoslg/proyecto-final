import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const routes = [
    { path: "", name: "home" },
    { path: "play", name: "play" },
  ];
  return (
    <div className={styles.sidebar}>
      <div className={styles.Logo}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Lidl-Logo.svg" />
      </div>
      <div className={styles.enlaces}>
        {routes.map((r) => (
          <NavLink key={r.path} to={r.path}>
            {r.name}
          </NavLink>
        ))}
      </div>
      <div>log out</div>
    </div>
  );
};

export default Sidebar;
