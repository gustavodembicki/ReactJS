import { Check, CheckCircle, Circle, Trash } from "phosphor-react";
import { MouseEvent } from "react";
import styles from "./Task.module.css";

interface TaskProps { // Ao invés de interface pode ser type também
    id: number,
    content: string,
    isChecked: boolean,
    checkTask: (id: number, checked: boolean) => void,
    deleteTask: (id: number) => void
}

export function Task({ id, content, isChecked, checkTask, deleteTask }: TaskProps) {
    const buttonCheckedValue = isChecked ? 1 : 0;

    function handleDeleteTask() {
        deleteTask(id);
    }

    function handleCheckedTask(event: MouseEvent<HTMLButtonElement>) {
        let buttonValue = Boolean(Number(event.currentTarget.value));
        checkTask(id, !buttonValue)
    }

    return (
        <div className={styles.task} key={`${id}-task`}>
            <button onClick={handleCheckedTask} className={isChecked ? styles.taskCheckButton : styles.taskUncheckButton} value={buttonCheckedValue}>
                {
                    isChecked
                        ? <CheckCircle size={24} className={styles.checkCircle} />
                        : <Circle size={24} />
                }
            </button>

            <div className={isChecked ? styles.contentConcluded : styles.content }>
                {content}
            </div>

            <button title='Deletar Tarefa' className={styles.trash} onClick={handleDeleteTask}>
                <Trash size={24} />
            </button>
        </div>
    );
}