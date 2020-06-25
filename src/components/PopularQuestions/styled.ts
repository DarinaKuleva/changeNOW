import styled from 'styled-components'

interface Props {
  isMobileView?: boolean,
  isOpenAnswer?: boolean,
  isTabletView?: boolean
}

export const Container = styled.div<Props>`
  background-color: #F6F4F8;
  margin: 150px 43,5px 33px 150px; 
  
  ${({ isMobileView }) => isMobileView && `margin: 32px 43,5px;`}
`

export const Question = styled.section<Props>`
  cursor: pointer;
  max-width: 1140px;
  margin: 0 auto;
  
  &:not(:last-child) {
    margin: 0 auto 4px auto;
  }
  
  ${({ isTabletView }) => isTabletView && `max-width: 900px;`}
  
  ${({ isMobileView }) => isMobileView && `
    width: 288px;
    
    &:last-child {
      padding-bottom: 32px;
    }
  `}
`

export const QuestionWrapper = styled.div<Props>`
  position: relative;
  background-color: #FFFFFF;
  
  padding: ${({isMobileView}) => isMobileView
    ? '16px 48px 16px 20px'
    : '16px 56px 16px 20px;'
  } 
`

export const Title = styled.h2<Props>`
  margin: 0;
  text-align: center;
  
  padding: ${({isMobileView}) => isMobileView
    ? '32px 0 8px 0'
    : '28px 0 32px 0'
  }    
`

export const QuestionTitle = styled.h3<Props>`
  margin: 0;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  
  &:hover {  
    color: black;
  }
  
  ${({ isMobileView }) => isMobileView && `
    font-weight: normal;
    font-size: 16px;
  `} 
`

export const Answer = styled.p<Props>`
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #333333; 
  overflow: hidden;
  transition: padding-top 500ms ease-out, max-height 500ms ease-out;
  max-height: 0;
  padding-top: 0;
  
  ${({ isOpenAnswer }) => isOpenAnswer && `
    transition: padding-top 300ms ease-in, max-height 6s ease-out;
    padding-top: 12px;
    max-height: 500px;
  `}
`

export const ArrowIcon = styled.img<Props>`
  position: absolute;
  margin-top: 8px;
  right: 0;
  margin-right: 24px;

  ${({ isOpenAnswer }) => isOpenAnswer && `
    transform: rotate(180deg)
  `}
`
