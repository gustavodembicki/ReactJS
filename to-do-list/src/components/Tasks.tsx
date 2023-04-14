import { TasksType } from '../@types/types';
import { NoTask } from './NoTask/NoTask';
import { Task } from './Task/Task';
import styles from './Tasks.module.css';

interface TaskListProps {
    tasks: TasksType[],
    tasksCount: number,
    tasksConcluded: number,
    checkTask: (id: number, checked: boolean) => void,
    deleteTask: (id: number) => void
}

export function Tasks({ tasks, tasksCount, tasksConcluded, checkTask, deleteTask }: TaskListProps) {
    return (
        <div className={styles.tasks}>
            <div>
                <header className={styles.header}>
                    <div className={styles.headerCreated}>
                        <strong>Tarefas Criadas</strong>
                        <div className={styles.headerCount}>
                            <strong>{tasksCount}</strong>
                        </div> 
                    </div>

                    <div className={styles.headerDone}>
                        <strong>Concluídas</strong>
                        <div className={styles.headerDoneCount}>
                            <strong>{tasksConcluded}</strong>
                        </div>
                    </div>
                </header>
            </div>

            <div>
                {
                    tasksCount == 0 
                        ? <NoTask /> 
                        : tasks.map(task => <Task 
                            key={task.id}
                            id={task.id} 
                            content={task.content} 
                            isChecked={task.isChecked} 
                            checkTask={checkTask}
                            deleteTask={deleteTask} />)
                }
            </div>
        </div>
    );
}