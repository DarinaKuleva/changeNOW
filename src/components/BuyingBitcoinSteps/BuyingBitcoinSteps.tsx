import * as React from 'react'
import DeviceViewerContext from '../../context/DeviceViewer/DeviceViewerContext'
import { buyingBitcoinSteps } from '../../constants'
import StepImage from './StepImage/StepImage'
import * as Styled from './styled'

const BuyingBitcoinSteps: React.FC = () => {
  const isMobileView = React.useContext(DeviceViewerContext)

  return (
    <Styled.Container isMobileView={isMobileView}>
      {buyingBitcoinSteps.map(step =>
        <Styled.Step key={step.index} isMobileView={isMobileView}>
          <StepImage step={step.index}/>
          <Styled.StepDescription isMobileView={isMobileView}>
            <Styled.Title isMobileView={isMobileView}>
              {step.title}
            </Styled.Title>
            {isMobileView
              ? <Styled.MobileContext>{step.mobileDesc}</Styled.MobileContext>
              : <Styled.DesktopContext>{step.desktopDesc}</Styled.DesktopContext>
            }
          </Styled.StepDescription>
        </Styled.Step>
      )}
    </Styled.Container>
  )
}

export default BuyingBitcoinSteps
