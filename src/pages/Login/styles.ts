import styled from 'styled-components'

import { IThemeProps } from '~/themes'

export const Text = styled.p`
  color: ${({ theme }: IThemeProps) => theme.colors.text};
`
