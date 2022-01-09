import React, { useState } from 'react'

import {
  Container,
  Content,
  Header,
  Title,
  Body,
  InputContainer,
  Input,
  Button,
  TodoListContainer,
  TodoItem
} from './styles'

interface ITodos {
  id: number
  name: string
  completed?: boolean
}

const createID = (): number => {
  const id = Math.round(Math.random() * 123456789)
  return id
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<ITodos[]>([])
  const [newTodo, setNewTodo] = useState('')

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value
    setNewTodo(inputValue)
  }

  const handleClickAddTodo = () => {
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
            <Button onClick={handleClickAddTodo}>Add Todo</Button>
          </InputContainer>
          <TodoListContainer>
            {todos.map(({ name, id, completed }) => (
              <TodoItem key={id} completed={completed}>
                <li onClick={() => handleClickCompleteTodo(id)}>{name}</li>
                <li>
                  <Button onClick={() => handleClickRemoveTodo(id)}>
                    Delete
                  </Button>
                </li>
              </TodoItem>
            ))}
          </TodoListContainer>
        </Body>
      </Content>
    </Container>
  )
}

export default TodoList
