import * as React from 'react'
import DeviceViewerContext from '../../context/DeviceViewer/DeviceViewerContext'
import * as Styled from './styled'

const App: React.FC = () => {
  const isMobileView = React.useContext(DeviceViewerContext)

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
