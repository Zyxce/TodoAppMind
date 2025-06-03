import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TodosActions from '../../components/Todos/TodosActions'

describe('TodosActions', () => {
  test('показывает счетчик', () => {
    render(
      <TodosActions
        remaining={3}
        clearCompleted={jest.fn()}
        hasCompleted={true}
      />
    )

    expect(screen.getByText('3 tasks left')).toBeInTheDocument()
  })

  test('Показывает"all tasks completed" когда есть таски но все выполнены', () => {
    render(
      <TodosActions
        remaining={0}
        clearCompleted={jest.fn()}
        hasCompleted={true}
      />
    )

    expect(screen.getByText('all tasks completed')).toBeInTheDocument()
  })

  test('Показывает "Add new task" когда тасков нет', () => {
    render(
      <TodosActions
        remaining={0}
        clearCompleted={jest.fn()}
        hasCompleted={false}
      />
    )

    expect(screen.getByText('Add new task')).toBeInTheDocument()
  })

  test('Очищает выполненные таски', () => {
    const mockClear = jest.fn()
    render(
      <TodosActions
        remaining={2}
        clearCompleted={mockClear}
        hasCompleted={true}
      />
    )

    fireEvent.click(screen.getByText('Clear Completed'))
    expect(mockClear).toHaveBeenCalled()
  })
})
