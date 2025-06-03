import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from '../types'
import TodoForm from './Todos/TodoForm'
import TodoList from './Todos/TodoList'
import TodosActions from './Todos/TodosActions'
import style from '../styles/components/App.module.css'
import { Filter } from '../types'

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<Filter>('all')

  const addTodo = (text: string) => {
    const newTodo: Todo = { id: uuidv4(), text, isCompleted: false }
    setTodos((prev) => [...prev, newTodo])
  }

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    )
  }

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.isCompleted))
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'active') return !todo.isCompleted
    if (filter === 'completed') return todo.isCompleted
    return true
  })

  const remainingCount = todos.filter((t) => !t.isCompleted).length

  return (
    <div className={style.appContainer}>
      <h1 className={style.header}>Task List</h1>
      <TodoForm addTodo={addTodo} />
      <div className={style.filters}>
        {(['all', 'active', 'completed'] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`${style.filterBtn} ${
              filter === f ? style.active : style.inactive
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      <TodosActions
        remaining={remainingCount}
        clearCompleted={clearCompleted}
        hasCompleted={todos.some((t) => t.isCompleted)}
      />
    </div>
  )
}

export default App
