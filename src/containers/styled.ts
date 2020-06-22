import styled from 'styled-components'

interface Props {
  isMobileView: boolean;
}

export const AppWrapper = styled.div<Props>`
  max-width: ${({isMobileView}) => isMobileView ? '375px;' : '1440px;'}
  margin: ${({isMobileView}) => isMobileView ? '77px auto 0 auto;' : '150px auto 0 auto;'}
`
