import React, { useEffect, useState } from 'react'
import styles from './UserStatusGraphs.module.css';

const UserStatusGraphs = ({data}) => {
    const [graph, setGraph] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(data.map(({acessos}) => Number(acessos)).reduce((a,b) => a + b))
     },[])
  return (
    <section className={`${styles.graph} animeLeft`}>
        <div className={styles.total}>
            <p>Acessos: {total} </p>
        </div>
    </section>
  )
}

export default UserStatusGraphs