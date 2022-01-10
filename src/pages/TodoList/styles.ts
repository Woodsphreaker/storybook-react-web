import styled from 'styled-components'

import { IThemeProps } from '~/themes'

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
  min-height: 80%;
  max-height: 80%;
  overflow-y: auto;
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
  color: #7159c1;
`

export const Body = styled.div`
  margin: 10px 0;
`

export const InputContainer = styled.div`
  display: flex;
`

export const Input = styled.input`
  flex: 1;
  border: none;
  border-radius: 5px;
  padding: 10px;
  outline-color: #7159c130;
  color: #7159c1;
  font-size: 1.2rem;
`
