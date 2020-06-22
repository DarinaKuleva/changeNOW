import styled  from 'styled-components'
import logo from '../../images/logo.svg'

interface Props {
  isMobileView: boolean
}

export const Container = styled.div<Props>`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    background: url(${logo});
    width: 55px;
    height: 32px;
    top: ${({isMobileView}) => isMobileView ? '-40px;' : '-90px;'}
    left: ${({isMobileView}) => isMobileView ? '20px;' : '0'}
  }  
`

export const BuyingDescription = styled.section<Props>`
  display: flex;
  flex-wrap: wrap;
  width: ${({isMobileView}) => isMobileView ? '350px;' : '540px;'}
`

export const Title = styled.h1<Props>`
  margin: 0;
  text-transform: capitalize;
  font-weight: bold;
  line-height: 64px;
  font-size: 58px;
  
  ${({ isMobileView }) => isMobileView && `
    font-size: 28px;
    margin-left: 20px;
  `}
`

export const Context = styled.p`
  margin: 24px 0;
  opacity: 0.6;
  font-weight: normal;
  font-size: 27px;
  line-height: 40px;
`

export const BuyingWidget = styled.section<Props>`
  width: 460px;
  
  ${({ isMobileView }) => isMobileView && `
    width: 350px;
    margin: 0 auto;
  `}
  
  .iframe {
    border: 1px solid #EEEEEE;
    border-radius: 2px;
    height: ${({isMobileView}) => isMobileView ? '416px;' : '430px;'}
  }
`
