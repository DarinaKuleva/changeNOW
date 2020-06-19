import * as React from 'react'
import DeviceViewerContext from '../../context/DeviceViewer/DeviceViewerContext'

const ChangeNowPage: React.FC = () => {
  const isMobileView = React.useContext(DeviceViewerContext)

  return (
    <div>
      <>
        {isMobileView
          ? <p>isMobileView</p>
          : <p>not isMobileView</p>
        }
      </>
    </div>
  )
}

export default ChangeNowPage
