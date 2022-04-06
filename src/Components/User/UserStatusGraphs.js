import React, { useEffect, useState } from 'react'
import styles from './UserStatusGraphs.module.css';
import {VictoryPie, VictoryChart, VictoryBar} from 'victory'

const UserStatusGraphs = ({data}) => {
    const [graph, setGraph] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const graphData = [];
        if(data) {
            graphData = data.map(item => {
                return {
                    x: item.title,
                    y: Number(item.acessos)
                }
            })
        }
        setTotal(data.map(({acessos}) => Number(acessos)).reduce((a,b) => a + b));
        setGraph(graphData);
     },[])
  return (
    <section className={`${styles.graph} animeLeft`}>
        <div className={`${styles.total} ${styles.graphItem}`}>
            <p>Acessos: {total} </p>
        </div>
        <div className={styles.graphItem}>
            <VictoryPie data={graph} innerRadius={50} padding={{top: 20, bottom: 20, left: 80, right: 80 }} style={{data: {fillOpacity: .9, stroke: '#fff', strokenWidth: 2}, labels: { fontSize: 14, fill: '#333'}}}/>
        </div>
        <div className={styles.graphItem}>
            <VictoryChart>
                <VictoryBar data={graph} alignment="start"/>
            </VictoryChart>
        </div>
    </section>
  )
}

export default UserStatusGraphs