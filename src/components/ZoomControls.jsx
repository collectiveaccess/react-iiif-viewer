import React from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled";
import ViewerButton from './ViewerButton'
// import Plus from '../images/plus.svg'
// import Minus from '../images/minus.svg'

const Container = styled.div`
  position: absolute;
  padding: 10px 10px 0 0;
  top: 0;
  right: 0;

  & button:first-of-type  {
    border-radius: 4px 4px 0 0;
    border-bottom: 1px solid #ffffff;
  }

  & button:last-of-type {
    border-radius: 0 0 4px 4px;
  }
`

const ZoomControls = ({zoomInHandler, zoomOutHandler}) => {
  return (
    <Container>
      <ViewerButton
        onClickHandler={zoomInHandler}
        // icon={<Plus/>}
        icon={<span className="material-icons">zoom_in</span>}
        titleText='zoom in'
        className='zoom-in'
        tabIndex="0"
        ariaLabel={"button to enter fullscreen mode"}
      />
      <ViewerButton
        onClickHandler={zoomOutHandler}
        // icon={<Minus/>}
        icon={<span className="material-icons">zoom_out</span>}
        titleText='zoom out'
        className='zoom-in'
        tabIndex="0"
        ariaLabel={"button to enter fullscreen mode"}
      />
    </Container>
  )
}

ZoomControls.propTypes = {
  zoomInHandler: PropTypes.func.isRequired,
  zoomOutHandler: PropTypes.func.isRequired
}

export default ZoomControls
