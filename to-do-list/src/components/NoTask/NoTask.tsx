import styles from './NoTask.module.css';

export function NoTask() {
    return (
        <div className={styles.noTask}>
            <img src="src\assets\clipboard.svg" alt="Sem tarefas" />
            <div className={styles.noTaskText}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <div>
                    Crie tarefas e organize seus itens a fazer
                </div>
            </div>
        </div>
    );
}