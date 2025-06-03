import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TodoForm from '../../components/Todos/TodoForm'

describe('TodoForm', () => {
  test('добавляет новую тудушку', () => {
    const mockAddTodo = jest.fn()
    render(<TodoForm addTodo={mockAddTodo} />)

    const input = screen.getByPlaceholderText('Add a new task')
    const button = screen.getByText('Add Task')

    fireEvent.change(input, { target: { value: 'New Task' } })
    fireEvent.click(button)

    expect(mockAddTodo).toHaveBeenCalledWith('New Task')
    expect(input).toHaveValue('')
  })

  test('проверяет что нельзя пустой туду', () => {
    const mockAddTodo = jest.fn()
    render(<TodoForm addTodo={mockAddTodo} />)

    fireEvent.click(screen.getByText('Add Task'))
    expect(mockAddTodo).not.toHaveBeenCalled()
  })
})
