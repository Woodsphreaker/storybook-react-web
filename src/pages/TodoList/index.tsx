import React, { useState } from 'react'
import { Button } from '~/components/Button'
import { Todos, ITodoItemProps } from '~/components/TodoList'
import { Input } from '~/components/Input'

import {
  Container,
  Content,
  Header,
  Title,
  Body,
  InputContainer
  // Input
} from './styles'

const createID = (): number => {
  const id = Math.round(Math.random() * 123456789)
  return id
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<ITodoItemProps[]>([])
  const [newTodo, setNewTodo] = useState('')

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value
    setNewTodo(inputValue)
  }

  const handleClickAddTodo = () => {
    if (!newTodo) {
      return false
    }

    setTodos(currentTodos => [
      ...currentTodos,
      { name: newTodo, id: createID() }
    ])
    setNewTodo('')
  }

  const handleReturnKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const isEnterKey = event.key === 'Enter'
    if (isEnterKey) {
      handleClickAddTodo()
    }
  }

  const handleClickRemoveTodo = (todoID: number) => {
    console.log('todoID', todoID, todos)
    const filteredTodo = todos.filter(({ id }) => id !== todoID)
    setTodos(filteredTodo)
  }

  const handleClickCompleteTodo = (todoID: number) => {
    const updatedTodos = todos.map(({ id, name, completed }) => ({
      id,
      name,
      completed: todoID === id ? !completed : completed
    }))
    setTodos(updatedTodos)
  }

  return (
    <Container>
      <Content>
        <Header>
          <Title>My Todos</Title>
        </Header>
        <Body>
          <InputContainer>
            <Input
              value={newTodo}
              onChange={handleInputChange}
              onKeyDown={handleReturnKeyPress}
            />
            <Button buttonType="default" onClick={handleClickAddTodo}>
              Add Todo
            </Button>
          </InputContainer>
          <Todos
            todos={todos}
            handleClickCompleteTodo={handleClickCompleteTodo}
            handleClickRemoveTodo={handleClickRemoveTodo}
          />
        </Body>
      </Content>
    </Container>
  )
}

export default TodoList
