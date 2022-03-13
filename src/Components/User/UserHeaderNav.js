import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as MyFeed } from "../../Assets/feed.svg";
import { ReactComponent as Statistics } from "../../Assets/statistics.svg";
import { ReactComponent as Send } from "../../Assets/add.svg";
import { ReactComponent as Logout } from "../../Assets/out.svg";
import styles from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
    const [mobile, setMobile] = useState(null)
  const { logout } = useContext(UserContext);
  return (
    <nav className={styles.nav}>
      <NavLink end to="/user">
        <MyFeed /> {mobile && 'Minhas fotos'}
      </NavLink>
      <NavLink to="/user/statistics">
        <Statistics /> {mobile && 'Estatisticas'}
      </NavLink>
      <NavLink to="/user/post">
        <Send />
        {mobile && 'Adicionar foto'}
      </NavLink>
      <button onClick={ logout}>
        <Logout />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
