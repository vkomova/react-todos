import React from 'react';
import styles from './TodoForm.module.css'
import { prependOnceListener } from 'cluster';

function TodoForm () {
    return (
        <form className={styles.TodoForm}>
            <input onChange={props.handleChange}/>
            <button 
            className={styles.SubmitButton}>
            Add Todo
            </button>
        </form>
    )
}

export default TodoForm