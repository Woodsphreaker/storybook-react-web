import React, { ReactNode } from 'react'

import { StyledButton, IButtonTypes } from './styles'

interface ButtonProps extends IButtonTypes {
  onClick?: () => void
  children?: ReactNode
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  buttonType = 'default',
  children
}: ButtonProps) => {
  return (
    <StyledButton buttonType={buttonType} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export { Button }
