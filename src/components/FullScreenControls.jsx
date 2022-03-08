import React from 'react'
import PropTypes from 'prop-types'
// import Expand from '../images/expand.svg'
// import Minimize from '../images/minimize.svg'
import styled from "@emotion/styled";
import ViewerButton from './ViewerButton'

const Container = styled.div`
  position: absolute;
  padding: 10px 0 0 10px;
  top: 0;
  left: 0;
`

const FullScreenControls = ({isInFullScreen, enterFullScreenHandler, exitFullScreenHandler}) => {
  const renderButton = () => {
    if (isInFullScreen) {
      return <ViewerButton
        // icon={<Minimize/>}
        icon={<span className="material-icons">close_fullscreen</span>}
        onClickHandler={exitFullScreenHandler}
        titleText='exit fullscreen'
        className='exit-fullscreen'
        tabIndex="1"
        arialabel={"button to exit fullscreen mode"}
      />
    }

    return <ViewerButton
      // icon={<Expand/>}
      icon={<span className="material-icons">fullscreen</span>}
      onClickHandler={enterFullScreenHandler}
      titleText='enter fullscreen'
      className='enter-fullscreen'
      tabIndex="1"
      ariaLabel={"button to enter fullscreen mode"}
    />
  }

  return (
    <Container data-testid="fullscreen-controls">{renderButton()}</Container>
  )
}

FullScreenControls.propTypes = {
  isInFullScreen: PropTypes.bool.isRequired,
  enterFullScreenHandler: PropTypes.func.isRequired,
  exitFullScreenHandler: PropTypes.func.isRequired
}

export default FullScreenControls
