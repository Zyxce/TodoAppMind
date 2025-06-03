import React from 'react'
import style from '../../styles/components/Todos/TodosActions.module.css'
import { TodosActionsProps } from '../../types'

const TodosActions: React.FC<TodosActionsProps> = ({
  remaining,
  clearCompleted,
  hasCompleted,
}) => (
  <div className={style.actions}>
    {!hasCompleted && remaining === 0 ? (
      <span>Add new task</span>
    ) : (
      <>
        {hasCompleted && remaining < 1 ? (
          <span>all tasks completed</span>
        ) : (
          <span>{`${remaining} ${remaining > 1 ? 'tasks' : 'task'} left`}</span>
        )}
      </>
    )}

    {hasCompleted &&
      (hasCompleted && remaining === 0 ? (
        <button className={style.clearBtn} onClick={clearCompleted}>
          Clear All
        </button>
      ) : (
        <button className={style.clearBtn} onClick={clearCompleted}>
          Clear Completed
        </button>
      ))}
  </div>
)

export default TodosActions
