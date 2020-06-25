import * as React from 'react'
import DeviceViewerContext from './DeviceViewerContext'

interface Props {
  children: JSX.Element
}

const DeviceViewerProvider: React.FC<Props> = ({children}) => {
  const [ deviceWidth, setDeviceWidth ] = React.useState<number>(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener("resize", () => setDeviceWidth(window.innerWidth))
  }, [])

  return (
    <DeviceViewerContext.Provider value={deviceWidth}>
      {children}
    </DeviceViewerContext.Provider>
  )
}

export default DeviceViewerProvider
