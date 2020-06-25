import * as React from 'react'
import DeviceViewerContext from '../../context/DeviceViewer/DeviceViewerContext'
import * as Styled from './styled'
import { MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH } from '../../constants'

const BuyingBitcoin: React.FC = () => {
  const deviceWidth = React.useContext(DeviceViewerContext)
  const isMobileView = deviceWidth <= MAX_MOBILE_WIDTH
  const isTabletView = deviceWidth <= MAX_TABLET_WIDTH

  return (
    <Styled.Container isMobileView={isMobileView} isTabletView={isTabletView}>
      <Styled.BuyingDescription isMobileView={isMobileView} isTabletView={isTabletView}>
        <Styled.Title isMobileView={isMobileView} isTabletView={isTabletView}>
          buy your first bitcoin
        </Styled.Title>
        {!isMobileView &&
          <Styled.Context isTabletView={isTabletView}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu malesuada.
          </Styled.Context>
        }
      </Styled.BuyingDescription>
      <Styled.BuyingWidget isMobileView={isMobileView}>
        <iframe
          id='iframe-widget'
          title='buyingWidget'
          src='https://changenow.io/embeds/exchange-widget/v2/widget.html?amount=0.1&from=usdterc20&link_id=1da735f8a23c8a&to=btc&FAQ=false&logo=true'
          width='100%'
          frameBorder='0'
          className='iframe'
        />
      </Styled.BuyingWidget>
    </Styled.Container>
  )
}

export default BuyingBitcoin
