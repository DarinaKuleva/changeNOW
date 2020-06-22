import * as React from 'react'
import DeviceViewerContext from '../../context/DeviceViewer/DeviceViewerContext'
import { blogArticles } from '../../constants'
import ArticleImage from './ArticleImage/ArticleImage'
import * as Styled from './styled'

const BlogArticles: React.FC = () => {
  const isMobileView = React.useContext(DeviceViewerContext)

  return (
    <>
      <Styled.Title isMobileView={isMobileView}>
        Learn more about crypto
      </Styled.Title>
      <Styled.Blog>
        {blogArticles.map(article =>
          <Styled.Article
            key={article.index}
            isMobileView={isMobileView}
            href={article.link}
            target='_blank'
            rel='noopener'
          >
            <ArticleImage article={article.index}/>
            <Styled.ArticleTitle>
              {article.title}
            </Styled.ArticleTitle>
          </Styled.Article>
        )}
      </Styled.Blog>
    </>
  )
}

export default BlogArticles
