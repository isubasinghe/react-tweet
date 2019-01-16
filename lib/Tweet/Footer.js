'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function (_React$Component) {
  (0, _inherits3.default)(Footer, _React$Component);

  function Footer(props) {
    (0, _classCallCheck3.default)(this, Footer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).call(this, props));

    if (_this.props.onTweetAction !== undefined) {
      _this.onReply = function (e) {
        e.preventDefault();
        _this.props.onTweetAction("reply", _this.props.data);
      };

      _this.onRetweet = function (e) {
        e.preventDefault();
        _this.props.onTweetAction("retweet", _this.props.data);
      };

      _this.onFavourite = function (e) {
        e.preventDefault();
        _this.props.onTweetAction("favourite", _this.props.data);
      };
    }
    return _this;
  }

  (0, _createClass3.default)(Footer, [{
    key: 'formatCount',
    value: function formatCount(count) {
      var readablize = function readablize(num) {
        var e = Math.floor(Math.log(num) / Math.log(1000));
        return (num / Math.pow(1000, e)).toFixed(1) + 'K';
      };

      if (count > 999) return readablize(count);else return count;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          linkProps = _props.linkProps;


      var retweetCountTextStyle = data.retweeted === true ? (0, _assign2.default)({}, _styles2.default.ProfileTweetActionCount, _styles2.default.ProfileTweetActionRetweetCountActive) : _styles2.default.ProfileTweetActionCount;
      var favoriteCountTextStyle = data.favorited === true ? (0, _assign2.default)({}, _styles2.default.ProfileTweetActionCount, _styles2.default.ProfileTweetActionFavouriteCountActive) : _styles2.default.ProfileTweetActionCount;

      return _react2.default.createElement(
        'div',
        { className: 'footer', style: _styles2.default.footer },
        _react2.default.createElement(
          'a',
          (0, _extends3.default)({ className: 'ProfileTweet-actionList', style: _styles2.default.ProfileTweetActionList, href: 'http://twitter.com/' + data.user.screen_name + '/status/' + data.id_str }, linkProps),
          _react2.default.createElement(
            'div',
            { className: 'ProfileTweet-action', style: _styles2.default.ProfileTweetAction },
            _react2.default.createElement(
              'button',
              { className: 'ProfileTweet-actionButton', style: _styles2.default.ProfileTweetActionBtn, onClick: this.onReply },
              _react2.default.createElement(
                'div',
                { className: 'IconContainer', style: _styles2.default.IconContainer },
                _react2.default.createElement(
                  'svg',
                  { viewBox: '0 0 24 24', width: '18', height: '18' },
                  _react2.default.createElement(
                    'g',
                    null,
                    _react2.default.createElement('path', { fill: '#657786', d: 'M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828a.85.85 0 0 0 .12.403.744.744 0 0 0 1.034.229c.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788zm3.787 12.972c-1.134.96-4.862 3.405-6.772 4.643V16.67a.75.75 0 0 0-.75-.75h-.396c-3.66 0-6.318-2.476-6.318-5.886 0-3.534 2.768-6.302 6.3-6.302l4.147.01h.002c3.532 0 6.3 2.766 6.302 6.296-.003 1.91-.942 3.844-2.514 5.176z' })
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'ProfileTweet-action', style: _styles2.default.ProfileTweetAction },
            _react2.default.createElement(
              'button',
              { className: 'ProfileTweet-actionButton', style: _styles2.default.ProfileTweetActionBtn, onClick: this.onRetweet },
              _react2.default.createElement(
                'div',
                { className: 'IconContainer', style: _styles2.default.IconContainer },
                data.retweeted === true ? _react2.default.createElement(
                  'svg',
                  { viewBox: '0 0 24 24', width: '18', height: '18' },
                  _react2.default.createElement(
                    'g',
                    null,
                    _react2.default.createElement('path', { fill: '#17bf63', d: 'M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4a3.955 3.955 0 0 0-3.95-3.95h-5.2a1.2 1.2 0 0 0 0 2.4h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326a1.2 1.2 0 0 0-1.697 1.697l3.374 3.375a1.202 1.202 0 0 0 1.698 0l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326a1.202 1.202 0 0 0 1.698-1.697L5.46 3.8a1.201 1.201 0 0 0-1.697 0L.388 7.177a1.2 1.2 0 0 0 1.697 1.697L3.41 7.547v9.403a3.955 3.955 0 0 0 3.95 3.95h5.2a1.2 1.2 0 0 0 .002-2.4z' })
                  )
                ) : _react2.default.createElement(
                  'svg',
                  { viewBox: '0 0 24 24', width: '18', height: '18' },
                  _react2.default.createElement(
                    'g',
                    null,
                    _react2.default.createElement('path', { fill: '#657786', d: 'M23.77 15.67a.749.749 0 0 0-1.06 0l-2.22 2.22V7.65a3.755 3.755 0 0 0-3.75-3.75h-5.85a.75.75 0 0 0 0 1.5h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22a.749.749 0 1 0-1.06 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5a.747.747 0 0 0 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22a.752.752 0 0 0 1.062 0 .749.749 0 0 0 0-1.06l-3.5-3.5a.747.747 0 0 0-1.06 0l-3.5 3.5a.749.749 0 1 0 1.06 1.06l2.22-2.22V16.7a3.755 3.755 0 0 0 3.75 3.75h5.85a.75.75 0 0 0 0-1.5z' })
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'IconTextContainer', style: _styles2.default.IconTextContainer },
                _react2.default.createElement(
                  'div',
                  { className: 'ProfileTweet-actionCount', style: retweetCountTextStyle },
                  data.retweet_count > 0 ? this.formatCount(data.retweet_count) : null
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'ProfileTweet-action', style: _styles2.default.ProfileTweetAction },
            _react2.default.createElement(
              'button',
              { className: 'ProfileTweet-actionButton', style: _styles2.default.ProfileTweetActionBtn, onClick: this.onFavourite },
              _react2.default.createElement(
                'div',
                { className: 'IconContainer', style: _styles2.default.IconContainer },
                data.favorited === true ? _react2.default.createElement(
                  'svg',
                  { viewBox: '0 0 24 24', width: '18', height: '18' },
                  _react2.default.createElement(
                    'g',
                    null,
                    _react2.default.createElement('path', { fill: '#e0245e', d: 'M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z' })
                  )
                ) : _react2.default.createElement(
                  'svg',
                  { viewBox: '0 0 24 24', width: '18', height: '18' },
                  _react2.default.createElement(
                    'g',
                    null,
                    _react2.default.createElement('path', { fill: '#657786', d: 'M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z' })
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'IconTextContainer', style: _styles2.default.IconTextContainer },
                _react2.default.createElement(
                  'div',
                  { className: 'ProfileTweet-actionCount', style: favoriteCountTextStyle },
                  data.favorite_count > 0 ? this.formatCount(data.favorite_count) : null
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Footer;
}(_react2.default.Component);

Footer.propTypes = {
  'data': _propTypes2.default.object
};

Footer.displayName = 'Footer';

exports.default = Footer;