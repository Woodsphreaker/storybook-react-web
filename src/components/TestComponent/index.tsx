import React, { ReactNode } from 'react'

import { Container } from './styles'

interface Props {
  children: ReactNode
}

const TestComponent: React.FC<Props> = ({ children }: Props) => {
  return <Container>{children}</Container>
}

export default TestComponent
