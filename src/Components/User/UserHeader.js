import React, { useEffect, useState } from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom';
const UserHeader = () => {
    const [title,setTitle] = useState();
    const location = useLocation();

    useEffect(() => {
        const {pathname} = location
        switch (pathname) {
            case '/user/statistic':
                setTitle('Estatísticas');
                break;
            case '/user/feed':
                setTitle('Meu Feed');
                break;
            case '/user/post':
                setTitle('Postar minha foto');
                break;
            default:
                setTitle('Meu Feed');
        }
    },[location])

  return (
    <header className={styles.header}>
        <h1 className="title">{title}</h1>
        <UserHeaderNav />
    </header>
  )
}

export default UserHeader