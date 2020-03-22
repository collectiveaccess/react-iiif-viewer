import React from 'react'
import PropTypes from 'prop-types'
import OpenSeadragon from 'openseadragon/build/openseadragon/openseadragon'
import styles from './styles.css'

const viewerId = 'openseadragon-viewer'
const zoomInId = 'zoom-in-blah'
const zoomOutId = 'zoom-out-blah'

class Viewer extends React.Component {
  constructor(props) {
    super(props)

    this.openSeadragonViewer = null
  }

  componentDidMount() {
    this.openSeadragonViewer = new OpenSeadragon({
      id: viewerId,
      tileSources: [this.props.iiifUrl],
      zoomInButton: zoomInId,
      zoomOutButton: zoomOutId
    })
  }

  componentDidUpdate(prevProps) {
    if (this.props.iiifUrl !== prevProps.iiifUrl) {
      this.openSeadragonViewer.open([this.props.iiifUrl])
    }
  }

  render() {
    return (
      <div className='react-iiif-viewer' style={{width: '100%', height: '100%', position: 'relative'}}>
        <div id={viewerId} style={{width: '100%', height: '100%', backgroundColor: '#202020'}} />
        <div className='viewer-controls' style={{position: 'absolute', top: 0, right: 0}}>
          <button id={zoomInId} className={styles.zoomIn}>zoomin</button>
          <button id={zoomOutId} className={styles.zoomOut}>zoomout</button>
        </div>
      </div>
    )
  }
}

Viewer.propTypes = {
  iiifUrl: PropTypes.string.isRequired
}

export default Viewer
