import React from 'react'

import style from '../../styles/components/Todos/TodoItem.module.css'
import { TodoItemProps } from '../../types'

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  deleteTodo,
}) => (
  <li className={style.item}>
    <label className={style.checkboxLabel}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
        className={style.checkbox}
      />
      <span className={style.labelText}>{todo.text}</span>
    </label>
    <button
      className={style.deleteBtn}
      data-testid="delete-btn"
      onClick={() => deleteTodo(todo.id)}
    >
      Delete
    </button>
  </li>
)

export default TodoItem
