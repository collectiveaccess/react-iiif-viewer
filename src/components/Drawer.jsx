import React from 'react'
import PropTypes from 'prop-types'
import styled from "@emotion/styled";
import theme from '../helpers/theme'

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${theme.thumbnailDrawerBackgroundColor}
  position: absolute;
  top: 100%;
  transition: top .3s ease-in;
  z-index: 1000;

  &.opened {
    top: 0;
  }
`

const ThumbnailGrid = styled.div`
  height: 100%;
  padding: 30px 30px 0 30px;
  overflow-y: auto;
  box-sizing: border-box;

  display: grid;
  grid-auto-rows: ${props => props.isInFullScreen ? theme.thumbnailHeightFullscreen: theme.thumbnailHeight};
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  @media only screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${theme.thumbnailDrawerBackgroundColor};
  }

  &::-webkit-scrollbar{
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    // background-color: ${theme.toolbarButtonColor};
    background-color: #c2c2c2;

    &:hover{
      background-color: #636363;
    }
  }
`

const ThumbnailWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    opacity: .7;

    &:hover {
      opacity: 1;
    }

    &.current {
      opacity: 1;

      &:after {
        content: '';
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        outline: 3px solid ${theme.thumbnailSelectedColor};
    }
`

const Thumbnail = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
`

const Drawer = ({
  thumbnailUrls,
  isOpen,
  isInFullScreen,
  currentIndex,
  onThumbnailSelectedHandler
}) => {
  return (
    <Container data-testid="drawer" className={isOpen ? 'opened' : ''}>
      <ThumbnailGrid isInFullScreen={isInFullScreen}>
        {
          thumbnailUrls.map((url, index) =>
          <ThumbnailWrapper
            key={index}
            className={currentIndex === index ? 'current' : ''}
            data-testid={`thumbnail-${index}`}
            onClick={() => onThumbnailSelectedHandler(index)}
          >
            <Thumbnail src={url}/>
          </ThumbnailWrapper>)
        }
      </ThumbnailGrid>
    </Container>
  )
}

Drawer.propTypes = {
  thumbnailUrls: PropTypes.array,
  isOpen: PropTypes.bool,
  isInFullScreen: PropTypes.bool,
  currentIndex: PropTypes.number,
  onThumbnailSelectedHandler: PropTypes.func
}

Drawer.defaultProps = {
  thumbnailUrls: [],
  isOpen: false,
  isInFullScreen: false,
  currentIndex: 0,
  onThumbnailSelectedHandler: () => {}
}

export default Drawer
