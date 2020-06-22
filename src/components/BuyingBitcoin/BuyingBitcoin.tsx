import * as React from 'react'
import DeviceViewerContext from '../../context/DeviceViewer/DeviceViewerContext'
import * as Styled from './styled'

const BuyingBitcoin: React.FC = () => {
  const isMobileView = React.useContext(DeviceViewerContext)

  return (
    <Styled.Container isMobileView={isMobileView}>
      <Styled.BuyingDescription isMobileView={isMobileView}>
        <Styled.Title isMobileView={isMobileView}>
          buy your first bitcoin
        </Styled.Title>
        {!isMobileView &&
          <Styled.Context>
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
