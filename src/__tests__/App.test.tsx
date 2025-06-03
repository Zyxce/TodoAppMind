import React from 'react'
import { render, screen, fireEvent, within } from '@testing-library/react'
import App from '../components/App'

describe('интеграционный для App', () => {
  test('для юзера', () => {
    render(<App />)

    //новые задачи
    const input = screen.getByPlaceholderText('Add a new task')
    fireEvent.change(input, { target: { value: 'Task 1' } })
    fireEvent.click(screen.getByText('Add Task'))

    fireEvent.change(input, { target: { value: 'Task 2' } })
    fireEvent.click(screen.getByText('Add Task'))

    //добавление
    expect(screen.getByText('Task 1')).toBeInTheDocument()
    expect(screen.getByText('Task 2')).toBeInTheDocument()
    expect(screen.getByText('2 tasks left')).toBeInTheDocument()

    //чекбокс
    const task1Checkbox = screen.getByLabelText('Task 1')
    fireEvent.click(task1Checkbox)

    //проверяем статус
    expect(screen.getByText('1 task left')).toBeInTheDocument()

    //фильрр
    fireEvent.click(screen.getByText('Completed'))
    expect(screen.getByText('Task 1')).toBeInTheDocument()
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument()

    //удаление
    const deleteButtons = screen.getAllByTestId('delete-btn')
    fireEvent.click(deleteButtons[0])

    //проверка удаления
    expect(screen.queryByText('Task 1')).not.toBeInTheDocument()
  })
})
