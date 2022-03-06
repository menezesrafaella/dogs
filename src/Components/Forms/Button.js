import React from 'react'
import styles from './Button.module.css'

const Button = ({children, ...props}) => {
  return (
    <button {...props} disabled className={styles.button}>{children}</button>
  )
}

export default Button