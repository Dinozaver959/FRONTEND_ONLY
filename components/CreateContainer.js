import React from 'react'
import styles from "../styles/CreateContainer.module.css"

function CreateContainer({ children }) {
  return (
    <main className={styles.Container}>       
        {children}
    </main>
  )
}

export default CreateContainer