import styled, { css } from 'styled-components'

export interface IButtonTypes {
  buttonType: 'default' | 'warning' | 'error'
}

const buttonTypes = {
  default: css`
    background-color: #7159c199;
    border: 1px solid #7159c1;
    color: #fff;
    :hover {
      background-color: #7159c1;
      border-color: transparent;
    }
  `,
  warning: css`
    background-color: #ff741299;
    border: 1px solid #ff7412;
    color: #fff;
    :hover {
      background-color: #ff7412;
      border-color: transparent;
    }
  `,
  error: css`
    background-color: #b3000099;
    border: 1px solid #b30000;
    color: #fff;
    :hover {
      background-color: #b30000;
      border-color: transparent;
    }
  `
}

export const StyledButton = styled.button<IButtonTypes>`
  margin-left: 20px;
  font-weight: 500;
  border-radius: 5px;
  padding: 10px;
  transition: background 0.2s;
  white-space: nowrap;
  min-width: 100px;
  ${({ buttonType }) => buttonTypes[buttonType]}
`
