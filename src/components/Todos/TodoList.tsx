import React from 'react'
import TodoItem from './TodoItem'
import style from '../../styles/components/Todos/TodoList.module.css'
import { TodoListProps } from '../../types'

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => (
  <ul className={style.list}>
    {todos.length > 0 ? (
      todos.map((todo) => (
        <div className={style.itemContainer} key={todo.id}>
          <TodoItem
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        </div>
      ))
    ) : (
      <div className={style.itemContainer}>
        <p className={style.noTodos}>No todos here</p>
      </div>
    )}
  </ul>
)

export default TodoList
