import React from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled";

const Button = styled.button`
  display: block !important;
  height: 35px;
  width: 35px;
  background-color: #939393;
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 4px;

  outline: none;
  // padding: 2px;
  border: 3px solid transparent;

  :focus {
    // padding: 2px;
    border: 3px solid #fff !important;
    outline: 0;
  }
`

const ViewerButton = ({onClickHandler, icon, titleText, className, tabIndex, ariaLabel}) => {
  return (
    <Button onClick={onClickHandler} tabIndex={tabIndex} aria-label={ariaLabel} title={titleText} className={className}>
      {icon}
    </Button>
  )
}

ViewerButton.propTypes = {
  onClickHandler: PropTypes.func,
  // icon: PropTypes.element,
  titleText: PropTypes.string,
  className: PropTypes.string,
  tabIndex: PropTypes.string,
  ariaLabel: PropTypes.string
}

export default ViewerButton
