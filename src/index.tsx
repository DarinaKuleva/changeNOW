import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import DeviceViewerProvider from './context/DeviceViewer/DeviceViewerProvider'
import App from './containers/App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <DeviceViewerProvider>
      <App/>
    </DeviceViewerProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
