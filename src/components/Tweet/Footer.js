import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

class Footer extends React.Component {
  constructor(props) {
      super(props)

      if(this.props.onTweetAction !== undefined) {
        this.onTweetAction = (e) => {
          e.preventDefault()
          this.props.onTweetAction(e.target.dataset.actiontype, this.props.data)
        }
      }
  }

  formatCount (count) {
    const readablize = num => {
      var e = Math.floor(Math.log(num) / Math.log(1000))
      return (num / Math.pow(1000, e)).toFixed(1) + 'K'
    }

    if (count > 999) return readablize(count)
    else return count
  }

  render () {
    const {data, linkProps} = this.props

    const retweetCountTextStyle = (data.retweeted === true) ? Object.assign({}, styles.ProfileTweetActionCount, styles.ProfileTweetActionRetweetCountActive) : styles.ProfileTweetActionCount
    const favoriteCountTextStyle = (data.favorited === true) ? Object.assign({}, styles.ProfileTweetActionCount, styles.ProfileTweetActionFavouriteCountActive) : styles.ProfileTweetActionCount

    return (
      <div className="footer" style={styles.footer}>
        <a className="ProfileTweet-actionList" style={styles.ProfileTweetActionList} href={`http://twitter.com/${data.user.screen_name}/status/${data.id_str}`} {...linkProps} onClick={this.onTweetAction}>
          <div className="ProfileTweet-action" style={styles.ProfileTweetAction}>
            <button className="ProfileTweet-actionButton" data-actionType="reply" style={styles.ProfileTweetActionBtn}>
              <div className="IconContainer" style={styles.IconContainer}>
              <svg viewBox="0 0 24 24" width="18" height="18"><g><path fill="#657786" d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828a.85.85 0 0 0 .12.403.744.744 0 0 0 1.034.229c.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67a.75.75 0 0 0-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z"></path></g></svg>
              </div>
            </button>
          </div>
          <div className="ProfileTweet-action" style={styles.ProfileTweetAction}>
            <button className="ProfileTweet-actionButton" data-actionType="retweet" style={styles.ProfileTweetActionBtn}>
              <div className="IconContainer" style={styles.IconContainer}>
              {data.retweeted === true ? <svg viewBox="0 0 24 24" width="18" height="18"><g><path fill="#17bf63" d="M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4a3.955 3.955 0 0 0-3.95-3.95h-5.2a1.2 1.2 0 0 0 0 2.4h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326a1.2 1.2 0 0 0-1.697 1.697l3.374 3.375a1.202 1.202 0 0 0 1.698 0l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326a1.202 1.202 0 0 0 1.698-1.697L5.46 3.8a1.201 1.201 0 0 0-1.697 0L.388 7.177a1.2 1.2 0 0 0 1.697 1.697L3.41 7.547v9.403a3.955 3.955 0 0 0 3.95 3.95h5.2a1.2 1.2 0 0 0 .002-2.4z"></path></g></svg> : <svg viewBox="0 0 24 24" width="18" height="18"><g><path fill="#657786" d="M23.77 15.67a.749.749 0 0 0-1.06 0l-2.22 2.22V7.65a3.755 3.755 0 0 0-3.75-3.75h-5.85a.75.75 0 0 0 0 1.5h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22a.749.749 0 1 0-1.06 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5a.747.747 0 0 0 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22a.752.752 0 0 0 1.062 0 .749.749 0 0 0 0-1.06l-3.5-3.5a.747.747 0 0 0-1.06 0l-3.5 3.5a.749.749 0 1 0 1.06 1.06l2.22-2.22V16.7a3.755 3.755 0 0 0 3.75 3.75h5.85a.75.75 0 0 0 0-1.5z"></path></g></svg>}
              </div>
              <div className="IconTextContainer" style={styles.IconTextContainer}>
                <div className="ProfileTweet-actionCount" style={retweetCountTextStyle}>
                  {data.retweet_count > 0 ? this.formatCount(data.retweet_count) : null}
                </div>
              </div>
            </button>
          </div>
          <div className="ProfileTweet-action" style={styles.ProfileTweetAction}>
            <button className="ProfileTweet-actionButton" data-actionType="favourite" style={styles.ProfileTweetActionBtn}>
              <div className="IconContainer" style={styles.IconContainer}>
              {data.favorited === true ? <svg viewBox="0 0 24 24" width="18" height="18"><g><path fill="#e0245e" d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path></g></svg> : <svg viewBox="0 0 24 24" width="18" height="18"><g><path fill="#657786" d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path></g></svg>}
              </div>
              <div className="IconTextContainer" style={styles.IconTextContainer}>
                <div className="ProfileTweet-actionCount" style={favoriteCountTextStyle}>
                  {data.favorite_count > 0 ? this.formatCount(data.favorite_count) : null}
                </div>
              </div>
            </button>
          </div>
        </a>
      </div>
    )
  }
}

Footer.propTypes = {
  'data': PropTypes.object
}

Footer.displayName = 'Footer'

export default Footer
