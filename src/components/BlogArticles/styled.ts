import styled from 'styled-components'

interface Props {
  isMobileView: boolean
}

export const Title = styled.h3<Props>`
  font-weight: bold;
  font-size: 27px;
  line-height: 40px;
  text-align: center;
  margin: 0 0 40px 0;
  
  ${({ isMobileView }) => isMobileView && `
    font-size: 24px;
    margin: 0 0 30px 0;
  `}
`

export const Article = styled.a<Props>`
  text-decoration: none;
  width: 366px;
  height: 284px;
  background: #F6F4F8;
  border-radius: 8px;
  
  &:hover {
    color: #35354C;
    text-decoration: underline;
  }
  
  &:not(:last-child) {
    margin: 0 auto 20px auto;
  }
  
  &:last-child {
    margin: ${({isMobileView}) => isMobileView
      ? '0 auto 80px auto;'
      : '0 auto 125px auto;'
    }
  }
  
  ${({ isMobileView }) => isMobileView && `
    width: 343px;
    height: 252px;
  `}
`

export const ArticleTitle = styled.p`
  font-weight: bold;
  font-size: 18px;
  color: #000000;
  width: 320px;
  margin: 0 auto;
`

export const Blog = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1140px;
  margin: 0 auto;
`
