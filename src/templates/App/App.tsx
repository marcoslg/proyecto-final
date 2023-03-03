import React from "react";
import Sidebar from "components/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
