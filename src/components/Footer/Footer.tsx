import * as React from 'react'
import DeviceViewerContext from '../../context/DeviceViewer/DeviceViewerContext'
import * as Styled from './styled'
import { MAX_MOBILE_WIDTH } from '../../constants'

const App: React.FC = () => {
  const deviceWidth = React.useContext(DeviceViewerContext)
  const isMobileView = deviceWidth <= MAX_MOBILE_WIDTH

  return (
    <Styled.Container>
      {isMobileView && <Styled.DividingLine/>}
      <Styled.PoweredBy>
        Powered by Change
        <Styled.Now>
          now
        </Styled.Now>
      </Styled.PoweredBy>
    </Styled.Container>
  )
}

export default App
