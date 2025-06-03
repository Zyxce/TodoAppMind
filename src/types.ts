export interface Todo {
  id: string
  text: string
  isCompleted: boolean
}

export type Filter = 'all' | 'active' | 'completed'

export interface TodosActionsProps {
  remaining: number
  clearCompleted: () => void
  hasCompleted: boolean
}

export interface TodoListProps {
  todos: Todo[]
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export interface TodoItemProps {
  todo: Todo
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export interface TodoFormProps {
  addTodo: (text: string) => void
}
