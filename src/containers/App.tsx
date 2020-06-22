import * as React from 'react'
import DeviceViewerContext from '../context/DeviceViewer/DeviceViewerContext'
import BuyingBitcoin from '../components/BuyingBitcoin'
import BuyingBitcoinSteps from '../components/BuyingBitcoinSteps'
import BlogArticles from '../components/BlogArticles'
import PopularQuestions from '../components/PopularQuestions'
import Footer from '../components/Footer'
import * as Styled from './styled'

const App: React.FC = () => {
  const isMobileView = React.useContext(DeviceViewerContext)

  return (
    <Styled.AppWrapper isMobileView={isMobileView}>
      <BuyingBitcoin/>
      <BuyingBitcoinSteps/>
      <BlogArticles/>
      <PopularQuestions/>
      <Footer/>
    </Styled.AppWrapper>
  )
}

export default App
