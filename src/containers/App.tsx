import * as React from 'react'
import DeviceViewerProvider from '../context/DeviceViewer/DeviceViewerProvider'
import ChangeNowPage from '../components/ChangeNowPage'
import * as Styled from './styled'

const App: React.FC = () => {
  return (
    <DeviceViewerProvider>
      <Styled.AppContainer>
        <ChangeNowPage/>
      </Styled.AppContainer>
    </DeviceViewerProvider>
  )
}

export default App
