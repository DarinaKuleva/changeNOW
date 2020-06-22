import * as React from 'react'
import DeviceViewerContext from './DeviceViewerContext'
import { MAX_MOBILE_WIDTH } from '../../constants'

interface Props {
  children: JSX.Element
}

const DeviceViewerProvider: React.FC<Props> = ({children}) => {
  const [ deviceWidth, setDeviceWidth ] = React.useState<number>(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener("resize", () => setDeviceWidth(window.innerWidth))
  }, [])

  const isMobileView = deviceWidth <= MAX_MOBILE_WIDTH

  return (
    <DeviceViewerContext.Provider value={isMobileView}>
      {children}
    </DeviceViewerContext.Provider>
  )
}

export default DeviceViewerProvider
