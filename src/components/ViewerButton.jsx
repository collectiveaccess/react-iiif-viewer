import React from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled";

const Button = styled.button`
  display: block !important;
  height: 35px;
  width: 35px;
  background-color: #696969;
  color: #ffffff;
  cursor: pointer;
  border: none;
  border-radius: 4px;

  outline: none;
  padding: 2px;
  border: 3px solid transparent;

  &:focus {
    padding: 2px;
    border: 3px solid #939393 !important;
    outline: 0;
  }
`

const ViewerButton = ({onClickHandler, icon, titleText, className}) => {
  return (
    <Button onClick={onClickHandler} title={titleText} className={className}>
      {icon}
    </Button>
  )
}

ViewerButton.propTypes = {
  onClickHandler: PropTypes.func,
  // icon: PropTypes.element,
  titleText: PropTypes.string,
}

export default ViewerButton
