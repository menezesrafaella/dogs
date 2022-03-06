import React from 'react'
import styles from './Input.module.css'

const Input = ({label, type, name}) => {
  return (
      <div className={styles.wrapper}>
          <label htmlFor={name} className={styles.label}>{label}</label>
          <input className={styles.input} type={type} id={name} />
          <span className={styles.error}>Error</span>
      </div>
  )
}

export default Input