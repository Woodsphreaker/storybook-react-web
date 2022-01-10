import React, { InputHTMLAttributes } from 'react'

import { InputText } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<InputProps> = props => {
  return <InputText {...props} />
}

export { Input }
