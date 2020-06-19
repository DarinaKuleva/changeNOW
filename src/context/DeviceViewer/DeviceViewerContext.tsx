import * as React from 'react'

const isMobileView = window.innerWidth <= 375

const DeviceViewerContext = React.createContext<boolean>(isMobileView)

export default DeviceViewerContext
