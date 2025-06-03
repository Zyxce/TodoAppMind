import React from 'react'
import { render, screen } from '@testing-library/react'
import TodoList from '../../components/Todos/TodoList'
import { Todo } from '../../types'

const mockTodos: Todo[] = [
  { id: '1', text: 'Task 1', isCompleted: false },
  { id: '2', text: 'Task 2', isCompleted: true },
]

const mockToggle = jest.fn()
const mockDelete = jest.fn()

describe('TodoList', () => {
  test('рендерит таски', () => {
    render(
      <TodoList
        todos={mockTodos}
        toggleTodo={mockToggle}
        deleteTodo={mockDelete}
      />
    )

    expect(screen.getByText('Task 1')).toBeInTheDocument()
    expect(screen.getByText('Task 2')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })

  test('пустое состояние', () => {
    render(
      <TodoList todos={[]} toggleTodo={mockToggle} deleteTodo={mockDelete} />
    )

    expect(screen.getByText('No todos here')).toBeInTheDocument()
  })
})
