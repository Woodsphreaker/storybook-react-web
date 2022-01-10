import React from 'react'
import { Button } from '~/components/Button'

import { TodoListContainer, TodoItem } from './styles'

export interface ITodoItemProps {
  id: number
  name: string
  completed?: boolean
}

interface ITodo {
  todos: ITodoItemProps[]
  handleClickCompleteTodo: (id: number) => void
  handleClickRemoveTodo: (id: number) => void
}

const Todos: React.FC<ITodo> = ({
  todos,
  handleClickCompleteTodo,
  handleClickRemoveTodo
}: ITodo) => {
  return (
    <TodoListContainer>
      {todos.map(({ name, id, completed }) => (
        <TodoItem key={id} completed={completed}>
          <li onClick={() => handleClickCompleteTodo(id)}>{name}</li>
          <li>
            <Button
              buttonType="error"
              onClick={() => handleClickRemoveTodo(id)}
            >
              Delete
            </Button>
          </li>
        </TodoItem>
      ))}
    </TodoListContainer>
  )
}

export { Todos }
