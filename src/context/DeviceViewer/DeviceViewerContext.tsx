import * as React from 'react'

const deviceWidth = window.innerWidth
const DeviceViewerContext = React.createContext<number>(deviceWidth)

export default DeviceViewerContext
