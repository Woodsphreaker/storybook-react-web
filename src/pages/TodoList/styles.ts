import styled from 'styled-components'

import { IThemeProps } from '~/themes'

interface ITodoItem {
  completed?: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  height: 100%;
  width: 100%;
  margin: auto;
`

export const Content = styled.div`
  width: 100%;
  min-height: 50%;
  margin: 10px;
  padding: 20px;
  background-color: #7159c130;
  border-radius: 10px;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0 10px 0;
  border-bottom: 1px solid #fff;
`

export const Title = styled.h3<IThemeProps>`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`

export const Body = styled.div`
  margin: 10px 0;
`

export const InputContainer = styled.div`
  display: flex;
`

export const Input = styled.input`
  flex: 1;
  border: 1px solid #7159c1;
  border-radius: 5px;
  padding: 10px;
`

export const Button = styled.button`
  margin-left: 20px;
  background-color: #7159c1;
  border: 1px solid #7159c1;
  color: #fff;
  font-weight: 500;
  border-radius: 5px;
  padding: 10px;
  transition: background 0.2s;

  :hover {
    background-color: #7159c199;
  }
`

export const TodoListContainer = styled.div`
  margin: 20px 0;
  border: 1px solid #f0f0f0;
  padding: 10px;
  border-radius: 5px;
`

export const TodoItem = styled.ul<ITodoItem>`
  display: flex;
  padding: 5px;
  padding: 20px;

  :hover {
    background-color: #7159c110;
  }

  & + ul {
    border-top: 1px solid #7159c150;
  }

  > li {
    color: #7159c1;
    :first-child {
      flex: 1;
      cursor: pointer;
      border-right: 1px solid #fff;
      margin: 0 20px 0 0;
      text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
    }
  }
`
