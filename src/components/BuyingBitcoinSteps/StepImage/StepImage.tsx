import * as React from 'react'
import stepOneImgUrl from '../../../images/buyingBitcStepsImg/buyingStepOne.svg'
import stepTwoImgUrl from '../../../images/buyingBitcStepsImg/buyingStepTwo.svg'
import stepThreeImgUrl from '../../../images/buyingBitcStepsImg/buyingStepThree.svg'
import { Steps } from '../../../enums'

interface Props {
  step: Steps
}

const StepImage: React.FC<Props> = ({step}) => {
  switch (step) {
    case Steps.One:
      return <img alt={Steps.One} src={stepOneImgUrl}/>
    case Steps.Two:
      return <img alt={Steps.Two} src={stepTwoImgUrl}/>
    case Steps.Three:
      return <img alt={Steps.Three} src={stepThreeImgUrl}/>
    default:
      return null
  }
}

export default StepImage
