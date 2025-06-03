import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TodoItem from '../../components/Todos/TodoItem'
import { Todo } from '../../types'

const mockTodo: Todo = { id: '1', text: 'Test Task', isCompleted: false }
const mockToggle = jest.fn()
const mockDelete = jest.fn()

describe('TodoItem', () => {
  test('правильный рендер', () => {
    render(
      <TodoItem
        todo={mockTodo}
        toggleTodo={mockToggle}
        deleteTodo={mockDelete}
      />
    )

    expect(screen.getByText('Test Task')).toBeInTheDocument()
    expect(screen.getByTestId('delete-btn')).toBeInTheDocument()
  })

  test('чекбокс', () => {
    render(
      <TodoItem
        todo={mockTodo}
        toggleTodo={mockToggle}
        deleteTodo={mockDelete}
      />
    )

    fireEvent.click(screen.getByRole('checkbox'))
    expect(mockToggle).toHaveBeenCalledWith('1')
  })

  test('удаляет тудушку', () => {
    render(
      <TodoItem
        todo={mockTodo}
        toggleTodo={mockToggle}
        deleteTodo={mockDelete}
      />
    )

    fireEvent.click(screen.getByTestId('delete-btn'))
    expect(mockDelete).toHaveBeenCalledWith('1')
  })
})
