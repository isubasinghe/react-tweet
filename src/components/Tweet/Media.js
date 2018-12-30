import React from 'react'
import PropTypes from 'prop-types'
import Photos from './Photos'
import Video from './Video'

class Media extends React.Component {
  render () {
    const mediaLoadProps = {onMediaLoad: this.props.onMediaLoad, onMediaLoadError: this.props.onMediaLoadError}

    switch (this.props.media[0].type) {
      case 'photo':
        return <Photos {... this.props} {... mediaLoadProps} />
      case 'video':
        return <Video {... this.props}  {... mediaLoadProps} />
      case 'animated_gif':
        return <Video gif={true} {... this.props}  {... mediaLoadProps} />
      default:
        return <div />
    }
  }
}

Media.propTypes = {
  'media': PropTypes.array,
  'onMediaLoad': PropTypes.func,
  'onMediaLoadError': PropTypes.func
}

Media.defaultProps = {
  'media': [{'type': ''}]
}

Media.displayName = 'Media'

export default Media
