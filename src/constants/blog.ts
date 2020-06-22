import { Articles } from '../enums'
import * as articleLink from './links'

export const blogArticles = [
  {
    index: Articles.WaysUseCryptoArticle,
    title: '4 ways to use crypto in real life',
    link: articleLink.WAYS_USE_CRYPTO_ARTICLE_LINK
  },
  {
    index: Articles.DigitalLibertarianArticle,
    title: 'Digital Libertarian. The Story of TON Founder Pavel Durov',
    link: articleLink.DIGITAL_LIBERTARIAN_ARTICLE_LINK
  },
  {
    index: Articles.StarsCryptocurrenciesArticle,
    title: 'What Happens When Pop Stars Launch Their Cryptocurrencies',
    link: articleLink.STARS_CRYPTOCURRENCIES_ARTICLE_LINK
  }
]

export const articleImgMobileSizes = {
  width: '343px',
  height: '172px'
}

export const articleImgDesktopSizes = {
  width: '366px',
  height: '184px'
}
