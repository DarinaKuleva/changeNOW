import styled  from 'styled-components'
import logo from '../../images/logo.svg'

interface Props {
  isMobileView?: boolean,
  isTabletView?: boolean
}

export const Container = styled.div<Props>`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: relative;
  
  ${({ isTabletView }) => isTabletView && `
    justify-content: center;
  `}
  
  &::before {
    content: '';
    position: absolute;
    background: url(${logo});
    width: 55px;
    height: 32px;
    top: ${({isMobileView}) => 
      isMobileView 
        ? '-40px;' 
        : '-90px;'
    }
    
    left: ${({isMobileView, isTabletView}) =>
      isMobileView
        ? '20px;'
        : isTabletView
          ? '20%;'
          : '0px;'
    }
  }  
`

export const BuyingDescription = styled.section<Props>`
  display: flex;
  flex-wrap: wrap;
  width: 540px;
  
  ${({ isTabletView }) => isTabletView && `
    width: 100%;
    text-align: center;
  `}
  
  ${({ isMobileView }) => isMobileView && `
    width: 350px;
  `}
`

export const Title = styled.h1<Props>`
  margin: 0;
  text-transform: capitalize;
  font-weight: bold;
  line-height: 64px;
  font-size: 58px;
  
  ${({ isTabletView }) => isTabletView && `
    width: 540px;;
    text-align: center;
    margin: 0 auto;
  `}
  
  ${({ isMobileView }) => isMobileView && `
    font-size: 28px;
    margin-left: 20px;
  `}
`

export const Context = styled.p<Props>`
  margin: 24px 0;
  opacity: 0.6;
  font-weight: normal;
  font-size: 27px;
  line-height: 40px;
  
  ${({ isTabletView }) => isTabletView && `
    width: 700px;
    text-align: center;
    margin: 30px auto;
  `}
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
