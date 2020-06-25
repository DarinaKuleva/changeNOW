import * as React from 'react'
import DeviceViewerContext from '../../context/DeviceViewer/DeviceViewerContext'
import { buyingBitcoinSteps, MAX_MOBILE_WIDTH, MAX_TABLET_WIDTH } from '../../constants'
import StepImage from './StepImage/StepImage'
import * as Styled from './styled'

const BuyingBitcoinSteps: React.FC = () => {
  const deviceWidth = React.useContext(DeviceViewerContext)
  const isMobileView = deviceWidth <= MAX_MOBILE_WIDTH
  const isTabletView = deviceWidth <= MAX_TABLET_WIDTH

  return (
    <Styled.Container isMobileView={isMobileView}>
      {buyingBitcoinSteps.map(step =>
        <Styled.Step key={step.index} isMobileView={isMobileView} isTabletView={isTabletView}>
          <StepImage step={step.index}/>
          <Styled.StepDescription isMobileView={isMobileView} isTabletView={isTabletView}>
            <Styled.Title isMobileView={isMobileView}>
              {step.title}
            </Styled.Title>
            {isMobileView
              ? <Styled.MobileContext>{step.mobileDesc}</Styled.MobileContext>
              : <Styled.DesktopContext isTabletView={isTabletView}>{step.desktopDesc}</Styled.DesktopContext>
            }
          </Styled.StepDescription>
        </Styled.Step>
      )}
    </Styled.Container>
  )
}

export default BuyingBitcoinSteps
