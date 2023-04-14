import { ChangeEvent, FormEvent } from 'react';
import styles from './NewTask.module.css';

interface NewTaskProps {
    addTask: (event: FormEvent) => void,
    handleNewTask: (event: ChangeEvent<HTMLInputElement>) => void,
    newTask: string
}

export function NewTask ({ addTask, handleNewTask, newTask }: NewTaskProps) {
    const newTaskIsEmpty = newTask.length == 0;

    return (
        <form className={styles.newTask} onSubmit={addTask}>
            <input 
                name="Tarefa" 
                placeholder="Adicione uma nota tarefa"
                value={newTask} 
                onChange={handleNewTask}
            />

            <button disabled={newTaskIsEmpty}>
                Criar 
                <img src="src\assets\layer-2.svg" />
            </button>
        </form>
    )
}