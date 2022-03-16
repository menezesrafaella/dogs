import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MyFeed } from "../../Assets/feed.svg";
import { ReactComponent as Statistics } from "../../Assets/statistics.svg";
import { ReactComponent as Send } from "../../Assets/add.svg";
import { ReactComponent as Logout } from "../../Assets/out.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";
import { findAllByDisplayValue } from "@testing-library/react";

const UserHeaderNav = () => {
  const { logout } = useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem");
  const [mobileMenu, setMobileMenu] = React.useState(findAllByDisplayValue);

  const {pathname} = useLocation();
  
  React.useEffect(() => {
    setMobileMenu(false);
  },[pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink end to="/user">
          <MyFeed /> {mobile && "Minhas fotos"}
        </NavLink>
        <NavLink to="/user/statistics">
          <Statistics /> {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="/user/post">
          <Send />
          {mobile && "Adicionar foto"}
        </NavLink>
        <button onClick={logout}>
          <Logout />
          {mobile && "Sair"}
        </button>
      </nav>
    </>
  );
};

export default UserHeaderNav;
