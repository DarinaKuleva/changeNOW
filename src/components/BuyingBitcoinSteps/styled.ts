import styled  from 'styled-components'

interface Props {
  isMobileView: boolean
}

export const Container = styled.section<Props>`
  max-width: 1140px;
  
  margin: ${({isMobileView}) => isMobileView
    ? '90px auto 100px auto'
    : '100px auto 122px auto'
  }
`

export const Step = styled.section<Props>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  &:nth-child(odd) { 
    flex-direction: row-reverse;
  } 
  
  &:not(:last-child) { 
    margin-bottom: 50px;
  }
  
  &:nth-child(even) img {
    margin-left: 35px;
  }
    
  img {
    min-width: 290px;
    margin: 0 auto;
  }
  
  ${({ isMobileView }) => isMobileView && `
    justify-content: center;
    align-items: center;
  
    &:not(:last-child) {
      margin-bottom: 80px;
    }
    
    &:nth-child(even) img {
      margin-right: 0;
      margin-left: 0;
    }
  `}
`

export const StepDescription = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 570px;
  font-size: 20px;
  padding-bottom: 10px;
  
  ${({ isMobileView }) => isMobileView && `
    width: 100%;
    text-align: center;
    padding-bottom: 0;
  `}
`

export const Title = styled.h2<Props>`
  margin: 43px 0 0 0;
  font-weight: bold;
  line-height: 64px;
  font-size: 64px;
  
  ${({ isMobileView }) => isMobileView && `font-size: 35px;`}
`

export const MobileContext = styled.p`
  margin: 0;
  width: 300px;
  margin: 0 auto;
`

export const DesktopContext = styled.p`
  margin: 15px 0 0 0;
  width: 560px;
`
