import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
import { UserContext } from "../UserContext";

const Header = () => {
  const { data, logout } = React.useContext(UserContext);
  return (
    <div className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        {data ? (
          <>
            <Link className={styles.login} to="/user">
              {data.nome}
              <button onClick={logout}>Sair</button>
            </Link>
          </>
        ) : (
          <Link className={styles.login} to="/login">
            Login
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
