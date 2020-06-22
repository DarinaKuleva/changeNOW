import * as React from 'react'
import DeviceViewerContext from '../../../context/DeviceViewer/DeviceViewerContext'
import { articleImgMobileSizes, articleImgDesktopSizes } from '../../../constants'
import waysUseCryptoArticleImg from '../../../images/articleImg/waysUseCryptoArticle.svg'
import digitalLibertarianArticleImg from '../../../images/articleImg/digitalLibertarianArticle.svg'
import starsCryptocurrenciesArticleImg from '../../../images/articleImg/starsCryptocurrenciesArticle.svg'
import { Articles } from '../../../enums'

interface Props {
  article: Articles
}

const ArticleImage: React.FC<Props> = ({article}) => {
  const isMobileView = React.useContext(DeviceViewerContext)

  const width = isMobileView ? articleImgMobileSizes.width : articleImgDesktopSizes.width
  const height = isMobileView ? articleImgMobileSizes.height : articleImgDesktopSizes.height

  switch (article) {
    case Articles.WaysUseCryptoArticle:
      return <img
        alt={Articles.WaysUseCryptoArticle}
        src={waysUseCryptoArticleImg}
        height={height}
        width={width}
      />
    case Articles.DigitalLibertarianArticle:
      return <img
        alt={Articles.DigitalLibertarianArticle}
        src={digitalLibertarianArticleImg}
        height={height}
        width={width}
      />
    case Articles.StarsCryptocurrenciesArticle:
      return <img
        alt={Articles.StarsCryptocurrenciesArticle}
        src={starsCryptocurrenciesArticleImg}
        height={height}
        width={width}
      />
    default:
      return null
  }
}

export default ArticleImage
