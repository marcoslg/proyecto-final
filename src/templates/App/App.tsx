import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.sidebar}>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
