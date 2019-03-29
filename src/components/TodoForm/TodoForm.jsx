import React from 'react';
import styles from './TodoForm.module.css'

function TodoForm (props) {
    return (
        <form className={styles.TodoForm}>
            <input
            value={props.text}
            onChange={props.handleChange}/>
            <button 
            className={styles.SubmitButton}>
            Add Todo
            </button>
        </form>
    )
}

export default TodoForm