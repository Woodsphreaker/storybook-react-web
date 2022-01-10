import styled from 'styled-components'
interface ITodoItem {
  completed?: boolean
}

export const TodoListContainer = styled.div`
  margin: 20px 0;
  padding: 10px;
  border-radius: 5px;
`

export const TodoItem = styled.ul<ITodoItem>`
  display: flex;
  align-items: center;
  background-color: ${props => (props.completed ? '#37b94147' : '#f0f0f0')};
  padding: 0 20px;
  border: 1px solid #7159c150;
  border-radius: 5px;
  transition: background 0.3s;

  :hover {
    background-color: #7159c110;
  }

  & + ul {
    margin-top: 15px;
  }

  > li {
    color: #7159c1;
    :first-child {
      display: flex;
      flex: 1;
      align-items: center;
      min-height: 40px;
      padding: 20px 0;
      margin: 0 20px 0 0;
      cursor: pointer;
      text-decoration: ${props => (props.completed ? 'line-through' : 'none')};
    }
  }
`
