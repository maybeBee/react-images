(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('prop-types'), require('react'), require('aphrodite'), require('react-scrolllock'), require('aphrodite/no-important'), require('react-transition-group'), require('react-dom')) :
	typeof define === 'function' && define.amd ? define(['prop-types', 'react', 'aphrodite', 'react-scrolllock', 'aphrodite/no-important', 'react-transition-group', 'react-dom'], factory) :
	(global.Lightbox = factory(global.PropTypes,global.React,global.aphrodite,global.ScrollLock,global.aphrodite,global.ReactTransitionGroup,global.ReactDOM));
}(this, (function (PropTypes,React,aphrodite,ScrollLock,noImportant,reactTransitionGroup,reactDom) { 'use strict';

PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
var React__default = 'default' in React ? React['default'] : React;
ScrollLock = ScrollLock && ScrollLock.hasOwnProperty('default') ? ScrollLock['default'] : ScrollLock;

// ==============================
// THEME
// ==============================

var theme = {};

// container
theme.container = {
	background: 'rgba(0, 0, 0, 0.8)',
	gutter: {
		horizontal: 10,
		vertical: 10
	},
	zIndex: 2001
};

// header
theme.header = {
	height: 40
};
theme.close = {
	fill: 'white'
};

// footer
theme.footer = {
	color: 'white',
	count: {
		color: 'rgba(255, 255, 255, 0.75)',
		fontSize: '0.85em'
	},
	height: 40,
	gutter: {
		horizontal: 0,
		vertical: 5
	}
};

// thumbnails
theme.thumbnail = {
	activeBorderColor: 'white',
	size: 50,
	gutter: 2
};

// arrow
theme.arrow = {
	background: 'none',
	fill: 'white',
	height: 120
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

function deepMerge(target) {
	var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	var extended = Object.assign({}, target);

	Object.keys(source).forEach(function (key) {
		if (_typeof(source[key]) !== 'object' || !source[key]) {
			extended[key] = source[key];
		} else {
			if (!target[key]) {
				extended[key] = source[key];
			} else {
				extended[key] = deepMerge(target[key], source[key]);
			}
		}
	});

	return extended;
}

var arrowLeft = (function (fill) {
    return "<svg width=\"43px\" height=\"43px\" viewBox=\"0 0 43 43\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g transform=\"translate(-170.000000, -979.000000)\">\n            <g>\n                <g transform=\"translate(191.500000, 1000.500000) scale(-1, 1) translate(-191.500000, -1000.500000) translate(170.000000, 979.000000)\">\n                    <circle id=\"Oval-6-Copy\" fill=\"#D4D4D4\" style=\"mix-blend-mode: screen;\" cx=\"21.5\" cy=\"21.5\" r=\"21.5\"/>\n                    <path id = \"path-left\" d=\"M24.8890175,21.1969985 L16.6387878,12.6009507 C16.375306,12.337469 16.375306,12.0739912 16.6387878,11.8105095 L18.120865,10.3284323 C18.4172819,10.0649506 18.6807596,10.0484832 18.9113061,10.2790297 L28.9894311,20.8017779 C29.0882368,20.9005835 29.1376389,21.0323224 29.1376389,21.1969985 C29.1376389,21.3616745 29.0882368,21.4934134 28.9894311,21.5922191 L18.9113061,32.1149672 C18.6478244,32.3784489 18.3843467,32.3784489 18.120865,32.1149672 L16.6387878,30.5834874 C16.375306,30.3200057 16.375306,30.056528 16.6387878,29.7930463 L24.8890175,21.1969985 Z\" fill=\"#1A1E31\"/>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>";
});

var arrowRight = (function () {
    return "<svg width=\"43px\" height=\"43px\" viewBox=\"0 0 43 43\">\n    <g stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g transform=\"translate(-1228.000000, -979.000000)\">\n            <g>\n                <g transform=\"translate(1228.000000, 979.000000)\">\n                    <circle id=\"circle-left\" fill=\"#D4D4D4\" cx=\"21.5\" cy=\"21.5\" r=\"21.5\"/>\n                    <path id=\"path-right\" d=\"M24.8890175,21.1969985 L16.6387878,12.6009507 C16.375306,12.337469 16.375306,12.0739912 16.6387878,11.8105095 L18.120865,10.3284323 C18.4172819,10.0649506 18.6807596,10.0484832 18.9113061,10.2790297 L28.9894311,20.8017779 C29.0882368,20.9005835 29.1376389,21.0323224 29.1376389,21.1969985 C29.1376389,21.3616745 29.0882368,21.4934134 28.9894311,21.5922191 L18.9113061,32.1149672 C18.6478244,32.3784489 18.3843467,32.3784489 18.120865,32.1149672 L16.6387878,30.5834874 C16.375306,30.3200057 16.375306,30.056528 16.6387878,29.7930463 L24.8890175,21.1969985 Z\" fill=\"#1A1E31\"/>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>";
});

var close = (function () {
    return "<svg width=\"28px\" height=\"28px\" viewBox=\"0 0 28 28\" >\n    <g stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <g transform=\"translate(-1232.000000, -645.000000)\" fill=\"#E3E3E2\">\n            <g>\n\t\t\t\t\t\t\t\t<circle id=\"circle-close\" fill=\"#D4D4D4\" cx=\"21.5\" cy=\"21.5\" r=\"21.5\"/>\n                <path d=\"M1246,645 C1249.87502,645 1253.17707,646.36457 1255.90625,649.09375 C1258.63543,651.82293 1260,655.124981 1260,659 C1260,662.875019 1258.63543,666.17707 1255.90625,668.90625 C1253.17707,671.63543 1249.87502,673 1246,673 C1242.12498,673 1238.82293,671.63543 1236.09375,668.90625 C1233.36457,666.17707 1232,662.875019 1232,659 C1232,655.124981 1233.36457,651.82293 1236.09375,649.09375 C1238.82293,646.36457 1242.12498,645 1246,645 Z M1252.75,663.6875 L1248.0625,659 L1252.8125,654.3125 C1253.0625,654.062499 1253.0625,653.812501 1252.8125,653.5625 L1251.4375,652.25 C1251.3125,652.124999 1251.1875,652.0625 1251.0625,652.0625 C1250.97917,652.0625 1250.875,652.124999 1250.75,652.25 L1246,656.875 L1241.25,652.25 C1241.125,652.124999 1241.02083,652.0625 1240.9375,652.0625 C1240.8125,652.0625 1240.6875,652.124999 1240.5625,652.25 L1239.25,653.5625 C1239,653.812501 1239,654.062499 1239.25,654.3125 L1244,659 L1239.25,663.75 C1239.16667,663.791667 1239.125,663.895832 1239.125,664.0625 C1239.125,664.229168 1239.16667,664.354166 1239.25,664.4375 L1240.5625,665.8125 C1240.64583,665.895834 1240.77083,665.9375 1240.9375,665.9375 C1241.10417,665.9375 1241.22917,665.895834 1241.3125,665.8125 L1246,661.0625 L1250.75,665.75 C1250.875,665.875001 1250.97917,665.9375 1251.0625,665.9375 C1251.1875,665.9375 1251.3125,665.875001 1251.4375,665.75 L1252.75,664.4375 C1252.875,664.354166 1252.9375,664.229168 1252.9375,664.0625 C1252.9375,663.937499 1252.875,663.812501 1252.75,663.6875 Z\"/>\n            </g>\n        </g>\n    </g>\n</svg>";
});

var icons = { arrowLeft: arrowLeft, arrowRight: arrowRight, close: close };

var Icon = function Icon(_ref) {
	var fill = _ref.fill,
	    type = _ref.type,
	    props = objectWithoutProperties(_ref, ['fill', 'type']);

	var icon = icons[type];

	return React__default.createElement('span', _extends({
		dangerouslySetInnerHTML: { __html: icon(fill) }
	}, props));
};

Icon.propTypes = {
	fill: PropTypes.string,
	type: PropTypes.oneOf(Object.keys(icons))
};
Icon.defaultProps = {
	fill: 'white'
};

function Arrow(_ref, _ref2) {
	var theme$$1 = _ref2.theme;
	var direction = _ref.direction,
	    icon = _ref.icon,
	    onClick = _ref.onClick,
	    size = _ref.size,
	    props = objectWithoutProperties(_ref, ['direction', 'icon', 'onClick', 'size']);

	var classes = noImportant.StyleSheet.create(deepMerge(defaultStyles$1, theme$$1));

	return React__default.createElement(
		'button',
		_extends({
			type: 'button',
			className: noImportant.css(classes.arrow, classes['arrow__direction__' + direction], size && classes['arrow__size__' + size]),
			onClick: onClick,
			onTouchEnd: onClick
		}, props),
		React__default.createElement(Icon, { fill: !!theme$$1.arrow && theme$$1.arrow.fill || theme.arrow.fill, type: icon })
	);
}

Arrow.propTypes = {
	direction: PropTypes.oneOf(['left', 'right']),
	icon: PropTypes.string,
	onClick: PropTypes.func.isRequired,
	size: PropTypes.oneOf(['medium', 'small']).isRequired
};
Arrow.defaultProps = {
	size: 'medium'
};
Arrow.contextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles$1 = {
	arrow: {
		background: 'none',
		border: 'none',
		borderRadius: 4,
		cursor: 'pointer',
		outline: 'none',
		padding: 10, // increase hit area
		position: 'absolute',
		top: '50%',

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none'
	},

	// sizes
	arrow__size__medium: {
		height: theme.arrow.height,
		marginTop: theme.arrow.height / -2,
		width: 40,

		'@media (min-width: 768px)': {
			width: 70
		}
	},
	arrow__size__small: {
		height: theme.thumbnail.size,
		marginTop: theme.thumbnail.size / -2,
		width: 30,

		'@media (min-width: 500px)': {
			width: 40
		}
	},

	// direction
	arrow__direction__right: {
		right: theme.container.gutter.horizontal
	},
	arrow__direction__left: {
		left: theme.container.gutter.horizontal
	}
};

function Container(_ref, _ref2) {
	var theme$$1 = _ref2.theme;
	var props = objectWithoutProperties(_ref, []);

	var classes = noImportant.StyleSheet.create(deepMerge(defaultStyles$2, theme$$1));

	return React__default.createElement('div', _extends({ id: 'lightboxBackdrop',
		className: noImportant.css(classes.container)
	}, props));
}

Container.contextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles$2 = {
	container: {
		alignItems: 'center',
		backgroundColor: theme.container.background,
		boxSizing: 'border-box',
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		left: 0,
		paddingBottom: theme.container.gutter.vertical,
		paddingLeft: theme.container.gutter.horizontal,
		paddingRight: theme.container.gutter.horizontal,
		paddingTop: theme.container.gutter.vertical,
		position: 'fixed',
		top: 0,
		width: '100%',
		zIndex: theme.container.zIndex
	}
};

function Footer(_ref, _ref2) {
	var theme$$1 = _ref2.theme;
	var caption = _ref.caption,
	    countCurrent = _ref.countCurrent,
	    countSeparator = _ref.countSeparator,
	    countTotal = _ref.countTotal,
	    showCount = _ref.showCount,
	    props = objectWithoutProperties(_ref, ['caption', 'countCurrent', 'countSeparator', 'countTotal', 'showCount']);

	if (!caption && !showCount) return null;

	var classes = noImportant.StyleSheet.create(deepMerge(defaultStyles$3, theme$$1));

	var imageCount = showCount ? React__default.createElement(
		'div',
		{ className: noImportant.css(classes.footerCount) },
		countCurrent,
		countSeparator,
		countTotal
	) : React__default.createElement('span', null);

	return React__default.createElement(
		'div',
		_extends({ className: noImportant.css(classes.footer) }, props),
		caption ? React__default.createElement(
			'figcaption',
			{ className: noImportant.css(classes.footerCaption) },
			caption
		) : React__default.createElement('span', null),
		imageCount
	);
}

Footer.propTypes = {
	caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	countCurrent: PropTypes.number,
	countSeparator: PropTypes.string,
	countTotal: PropTypes.number,
	showCount: PropTypes.bool
};
Footer.contextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles$3 = {
	footer: {
		boxSizing: 'border-box',
		color: theme.footer.color,
		cursor: 'auto',
		display: 'flex',
		justifyContent: 'space-between',
		left: 0,
		lineHeight: 1.3,
		paddingBottom: theme.footer.gutter.vertical,
		paddingLeft: theme.footer.gutter.horizontal,
		paddingRight: theme.footer.gutter.horizontal,
		paddingTop: theme.footer.gutter.vertical
	},
	footerCount: {
		color: theme.footer.count.color,
		fontSize: theme.footer.count.fontSize,
		paddingLeft: '1em' // add a small gutter for the caption
	},
	footerCaption: {
		flex: '1 1 0'
	}
};

function Header(_ref, _ref2) {
	var theme$$1 = _ref2.theme;
	var customControls = _ref.customControls,
	    onClose = _ref.onClose,
	    showCloseButton = _ref.showCloseButton,
	    closeButtonTitle = _ref.closeButtonTitle,
	    props = objectWithoutProperties(_ref, ['customControls', 'onClose', 'showCloseButton', 'closeButtonTitle']);

	var classes = noImportant.StyleSheet.create(deepMerge(defaultStyles$4, theme$$1));

	return React__default.createElement(
		'div',
		_extends({ className: noImportant.css(classes.header) }, props),
		customControls ? customControls : React__default.createElement('span', null),
		!!showCloseButton && React__default.createElement(
			'button',
			{
				title: closeButtonTitle,
				className: noImportant.css(classes.close),
				onClick: onClose
			},
			React__default.createElement(Icon, { fill: !!theme$$1.close && theme$$1.close.fill || theme.close.fill, type: 'close' })
		)
	);
}

Header.propTypes = {
	customControls: PropTypes.array,
	onClose: PropTypes.func.isRequired,
	showCloseButton: PropTypes.bool
};
Header.contextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles$4 = {
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		height: theme.header.height
	},
	close: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		outline: 'none',
		position: 'relative',
		top: 0,
		verticalAlign: 'bottom',

		// increase hit area
		height: 40,
		marginRight: -10,
		padding: 10,
		width: 40
	}
};

function Thumbnail(_ref, _ref2) {
	var index = _ref.index,
	    src = _ref.src,
	    thumbnail = _ref.thumbnail,
	    active = _ref.active,
	    _onClick = _ref.onClick;
	var theme$$1 = _ref2.theme;

	var url = thumbnail ? thumbnail : src;
	var classes = noImportant.StyleSheet.create(deepMerge(defaultStyles$5, theme$$1));

	return React__default.createElement('div', {
		className: noImportant.css(classes.thumbnail, active && classes.thumbnail__active),
		onClick: function onClick(e) {
			e.preventDefault();
			e.stopPropagation();
			_onClick(index);
		},
		style: { backgroundImage: 'url("' + url + '")' }
	});
}

Thumbnail.propTypes = {
	active: PropTypes.bool,
	index: PropTypes.number,
	onClick: PropTypes.func.isRequired,
	src: PropTypes.string,
	thumbnail: PropTypes.string
};

Thumbnail.contextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles$5 = {
	thumbnail: {
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		borderRadius: 2,
		boxShadow: 'inset 0 0 0 1px hsla(0,0%,100%,.2)',
		cursor: 'pointer',
		display: 'inline-block',
		height: theme.thumbnail.size,
		margin: theme.thumbnail.gutter,
		overflow: 'hidden',
		width: theme.thumbnail.size
	},
	thumbnail__active: {
		boxShadow: 'inset 0 0 0 2px ' + theme.thumbnail.activeBorderColor
	}
};

var classes = noImportant.StyleSheet.create({
	paginatedThumbnails: {
		bottom: theme.container.gutter.vertical,
		height: theme.thumbnail.size,
		padding: '0 50px',
		position: 'absolute',
		textAlign: 'center',
		whiteSpace: 'nowrap',
		left: '50%',
		transform: 'translateX(-50%)'
	}
});

var arrowStyles = {
	height: theme.thumbnail.size + theme.thumbnail.gutter * 2,
	width: 40
};

var PaginatedThumbnails = function (_Component) {
	inherits(PaginatedThumbnails, _Component);

	function PaginatedThumbnails(props) {
		classCallCheck(this, PaginatedThumbnails);

		var _this = possibleConstructorReturn(this, (PaginatedThumbnails.__proto__ || Object.getPrototypeOf(PaginatedThumbnails)).call(this, props));

		_this.state = {
			hasCustomPage: false
		};

		_this.gotoPrev = _this.gotoPrev.bind(_this);
		_this.gotoNext = _this.gotoNext.bind(_this);
		return _this;
	}

	createClass(PaginatedThumbnails, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			// Component should be controlled, flush state when currentImage changes
			if (nextProps.currentImage !== this.props.currentImage) {
				this.setState({
					hasCustomPage: false
				});
			}
		}

		// ==============================
		// METHODS
		// ==============================

	}, {
		key: 'getFirst',
		value: function getFirst() {
			var _props = this.props,
			    currentImage = _props.currentImage,
			    offset = _props.offset;

			if (this.state.hasCustomPage) {
				return this.clampFirst(this.state.first);
			}
			return this.clampFirst(currentImage - offset);
		}
	}, {
		key: 'setFirst',
		value: function setFirst(event, newFirst) {
			var first = this.state.first;


			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}

			if (first === newFirst) return;

			this.setState({
				hasCustomPage: true,
				first: newFirst
			});
		}
	}, {
		key: 'gotoPrev',
		value: function gotoPrev(event) {
			this.setFirst(event, this.getFirst() - this.props.offset);
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext(event) {
			this.setFirst(event, this.getFirst() + this.props.offset);
		}
	}, {
		key: 'clampFirst',
		value: function clampFirst(value) {
			var _props2 = this.props,
			    images = _props2.images,
			    offset = _props2.offset;


			var totalCount = 2 * offset + 1; // show $offset extra thumbnails on each side

			if (value < 0) {
				return 0;
			} else if (value + totalCount > images.length) {
				// Too far
				return images.length - totalCount;
			} else {
				return value;
			}
		}

		// ==============================
		// RENDERERS
		// ==============================

	}, {
		key: 'renderArrowPrev',
		value: function renderArrowPrev() {
			if (this.getFirst() <= 0) return null;

			return React__default.createElement(Arrow, {
				direction: 'left',
				size: 'small',
				icon: 'arrowLeft',
				onClick: this.gotoPrev,
				style: arrowStyles,
				title: 'Previous (Left arrow key)',
				type: 'button'
			});
		}
	}, {
		key: 'renderArrowNext',
		value: function renderArrowNext() {
			var _props3 = this.props,
			    offset = _props3.offset,
			    images = _props3.images;

			var totalCount = 2 * offset + 1;
			if (this.getFirst() + totalCount >= images.length) return null;

			return React__default.createElement(Arrow, {
				direction: 'right',
				size: 'small',
				icon: 'arrowRight',
				onClick: this.gotoNext,
				style: arrowStyles,
				title: 'Next (Right arrow key)',
				type: 'button'
			});
		}
	}, {
		key: 'render',
		value: function render$$1() {
			var _props4 = this.props,
			    images = _props4.images,
			    currentImage = _props4.currentImage,
			    onClickThumbnail = _props4.onClickThumbnail,
			    offset = _props4.offset;


			var totalCount = 2 * offset + 1; // show $offset extra thumbnails on each side
			var thumbnails = [];
			var baseOffset = 0;
			if (images.length <= totalCount) {
				thumbnails = images;
			} else {
				// Try to center current image in list
				baseOffset = this.getFirst();
				thumbnails = images.slice(baseOffset, baseOffset + totalCount);
			}

			return React__default.createElement(
				'div',
				{ className: noImportant.css(classes.paginatedThumbnails) },
				this.renderArrowPrev(),
				thumbnails.map(function (img, idx) {
					return React__default.createElement(Thumbnail, _extends({ key: baseOffset + idx
					}, img, {
						index: baseOffset + idx,
						onClick: onClickThumbnail,
						active: baseOffset + idx === currentImage }));
				}),
				this.renderArrowNext()
			);
		}
	}]);
	return PaginatedThumbnails;
}(React.Component);

PaginatedThumbnails.propTypes = {
	currentImage: PropTypes.number,
	images: PropTypes.array,
	offset: PropTypes.number,
	onClickThumbnail: PropTypes.func.isRequired
};

// Pass the Lightbox context through to the Portal's descendents
// StackOverflow discussion http://goo.gl/oclrJ9

var PassContext = function (_Component) {
	inherits(PassContext, _Component);

	function PassContext() {
		classCallCheck(this, PassContext);
		return possibleConstructorReturn(this, (PassContext.__proto__ || Object.getPrototypeOf(PassContext)).apply(this, arguments));
	}

	createClass(PassContext, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return this.props.context;
		}
	}, {
		key: 'render',
		value: function render$$1() {
			return React.Children.only(this.props.children);
		}
	}]);
	return PassContext;
}(React.Component);

PassContext.propTypes = {
	context: PropTypes.object.isRequired
};
PassContext.childContextTypes = {
	theme: PropTypes.object
};

var Portal = function (_Component) {
	inherits(Portal, _Component);

	function Portal() {
		classCallCheck(this, Portal);

		var _this = possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).call(this));

		_this.portalElement = null;
		return _this;
	}

	createClass(Portal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var p = document.createElement('div');
			document.body.appendChild(p);
			this.portalElement = p;
			this.componentDidUpdate();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			// Animate fade on mount/unmount
			var duration = 200;
			var styles = '\n\t\t\t\t.fade-enter { opacity: 0.01; }\n\t\t\t\t.fade-enter.fade-enter-active { opacity: 1; transition: opacity ' + duration + 'ms; }\n\t\t\t\t.fade-leave { opacity: 1; }\n\t\t\t\t.fade-leave.fade-leave-active { opacity: 0.01; transition: opacity ' + duration + 'ms; }\n\t\t';

			reactDom.render(React__default.createElement(
				PassContext,
				{ context: this.context },
				React__default.createElement(
					'div',
					null,
					React__default.createElement(
						'style',
						null,
						styles
					),
					React__default.createElement(reactTransitionGroup.CSSTransitionGroup, _extends({
						component: 'div',
						transitionName: 'fade',
						transitionEnterTimeout: duration,
						transitionLeaveTimeout: duration
					}, this.props))
				)
			), this.portalElement);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.body.removeChild(this.portalElement);
		}
	}, {
		key: 'render',
		value: function render$$1() {
			return null;
		}
	}]);
	return Portal;
}(React.Component);

Portal.contextTypes = {
	theme: PropTypes.object.isRequired
};

/**
	Bind multiple component methods:

	* @param {this} context
	* @param {Array} functions

	constructor() {
		...
		bindFunctions.call(this, ['handleClick', 'handleOther']);
	}
*/

function bindFunctions(functions) {
	var _this = this;

	functions.forEach(function (f) {
		return _this[f] = _this[f].bind(_this);
	});
}

// Return true if window + document

var canUseDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var Lightbox = function (_Component) {
	inherits(Lightbox, _Component);

	function Lightbox(props) {
		classCallCheck(this, Lightbox);

		var _this = possibleConstructorReturn(this, (Lightbox.__proto__ || Object.getPrototypeOf(Lightbox)).call(this, props));

		_this.theme = deepMerge(theme, props.theme);
		_this.classes = aphrodite.StyleSheet.create(deepMerge(defaultStyles, _this.theme));
		bindFunctions.call(_this, ['gotoNext', 'gotoPrev', 'closeBackdrop', 'handleKeyboardInput']);
		return _this;
	}

	createClass(Lightbox, [{
		key: 'getChildContext',
		value: function getChildContext() {
			return {
				theme: this.theme
			};
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.isOpen && this.props.enableKeyboardInput) {
				window.addEventListener('keydown', this.handleKeyboardInput);
			}
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (!canUseDom) return;

			// preload images
			if (nextProps.preloadNextImage) {
				var currentIndex = this.props.currentImage;
				var nextIndex = nextProps.currentImage + 1;
				var prevIndex = nextProps.currentImage - 1;
				var preloadIndex = void 0;

				if (currentIndex && nextProps.currentImage > currentIndex) {
					preloadIndex = nextIndex;
				} else if (currentIndex && nextProps.currentImage < currentIndex) {
					preloadIndex = prevIndex;
				}

				// if we know the user's direction just get one image
				// otherwise, to be safe, we need to grab one in each direction
				if (preloadIndex) {
					this.preloadImage(preloadIndex);
				} else {
					this.preloadImage(prevIndex);
					this.preloadImage(nextIndex);
				}
			}

			// add/remove event listeners
			if (!this.props.isOpen && nextProps.isOpen && nextProps.enableKeyboardInput) {
				window.addEventListener('keydown', this.handleKeyboardInput);
			}
			if (!nextProps.isOpen && nextProps.enableKeyboardInput) {
				window.removeEventListener('keydown', this.handleKeyboardInput);
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.props.enableKeyboardInput) {
				window.removeEventListener('keydown', this.handleKeyboardInput);
			}
		}

		// ==============================
		// METHODS
		// ==============================

	}, {
		key: 'preloadImage',
		value: function preloadImage(idx) {
			var image = this.props.images[idx];

			if (!image) return;

			var img = new Image();

			img.src = image.src;
			img.srcset = img.srcSet || img.srcset;

			if (image.srcset) {
				img.srcset = image.srcset.join();
			}
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext(event) {
			if (this.props.currentImage === this.props.images.length - 1) return;
			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}
			this.props.onClickNext();
		}
	}, {
		key: 'gotoPrev',
		value: function gotoPrev(event) {
			if (this.props.currentImage === 0) return;
			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}
			this.props.onClickPrev();
		}
	}, {
		key: 'closeBackdrop',
		value: function closeBackdrop(event) {
			// make sure event only happens if they click the backdrop
			// and if the caption is widening the figure element let that respond too
			if (event.target.id === 'lightboxBackdrop' || event.target.tagName === 'FIGURE') {
				this.props.onClose();
			}
		}
	}, {
		key: 'handleKeyboardInput',
		value: function handleKeyboardInput(event) {
			if (event.keyCode === 37) {
				// left
				this.gotoPrev(event);
				return true;
			} else if (event.keyCode === 39) {
				// right
				this.gotoNext(event);
				return true;
			} else if (event.keyCode === 27) {
				// esc
				this.props.onClose();
				return true;
			}
			return false;
		}

		// ==============================
		// RENDERERS
		// ==============================

	}, {
		key: 'renderArrowPrev',
		value: function renderArrowPrev() {
			if (this.props.currentImage === 0) return null;

			return React__default.createElement(Arrow, {
				direction: 'left',
				icon: 'arrowLeft',
				onClick: this.gotoPrev,
				title: this.props.leftArrowTitle,
				type: 'button'
			});
		}
	}, {
		key: 'renderArrowNext',
		value: function renderArrowNext() {
			if (this.props.currentImage === this.props.images.length - 1) return null;

			return React__default.createElement(Arrow, {
				direction: 'right',
				icon: 'arrowRight',
				onClick: this.gotoNext,
				title: this.props.rightArrowTitle,
				type: 'button'
			});
		}
	}, {
		key: 'renderDialog',
		value: function renderDialog() {
			var _props = this.props,
			    backdropClosesModal = _props.backdropClosesModal,
			    customControls = _props.customControls,
			    isOpen = _props.isOpen,
			    onClose = _props.onClose,
			    showCloseButton = _props.showCloseButton,
			    showThumbnails = _props.showThumbnails,
			    width = _props.width;


			if (!isOpen) return React__default.createElement('span', { key: 'closed' });

			var offsetThumbnails = 0;
			if (showThumbnails) {
				offsetThumbnails = this.theme.thumbnail.size + this.theme.container.gutter.vertical;
			}

			return React__default.createElement(
				Container,
				{
					key: 'open',
					onClick: backdropClosesModal && this.closeBackdrop,
					onTouchEnd: backdropClosesModal && this.closeBackdrop
				},
				React__default.createElement(
					'div',
					{ className: aphrodite.css(this.classes.content), style: { marginBottom: offsetThumbnails, maxWidth: width } },
					React__default.createElement(Header, {
						customControls: customControls,
						onClose: onClose,
						showCloseButton: showCloseButton,
						closeButtonTitle: this.props.closeButtonTitle
					}),
					this.renderImages()
				),
				this.renderThumbnails(),
				this.renderArrowPrev(),
				this.renderArrowNext(),
				React__default.createElement(ScrollLock, null)
			);
		}
	}, {
		key: 'renderImages',
		value: function renderImages() {
			var _props2 = this.props,
			    currentImage = _props2.currentImage,
			    images = _props2.images,
			    imageCountSeparator = _props2.imageCountSeparator,
			    onClickImage = _props2.onClickImage,
			    showImageCount = _props2.showImageCount,
			    showThumbnails = _props2.showThumbnails;


			if (!images || !images.length) return null;

			var image = images[currentImage];
			image.srcset = image.srcSet || image.srcset;

			var srcset = void 0;
			var sizes = void 0;

			if (image.srcset) {
				srcset = image.srcset.join();
				sizes = '100vw';
			}

			var thumbnailsSize = showThumbnails ? this.theme.thumbnail.size : 0;
			var heightOffset = this.theme.header.height + this.theme.footer.height + thumbnailsSize + this.theme.container.gutter.vertical + 'px';

			return React__default.createElement(
				'figure',
				{ className: aphrodite.css(this.classes.figure) },
				React__default.createElement('img', {
					className: aphrodite.css(this.classes.image),
					onClick: !!onClickImage && onClickImage,
					sizes: sizes,
					alt: image.alt,
					src: image.src,
					srcSet: srcset,
					style: {
						cursor: this.props.onClickImage ? 'pointer' : 'auto',
						maxHeight: 'calc(100vh - ' + heightOffset + ')'
					}
				}),
				React__default.createElement(Footer, {
					caption: images[currentImage].caption,
					countCurrent: currentImage + 1,
					countSeparator: imageCountSeparator,
					countTotal: images.length,
					showCount: showImageCount
				})
			);
		}
	}, {
		key: 'renderThumbnails',
		value: function renderThumbnails() {
			var _props3 = this.props,
			    images = _props3.images,
			    currentImage = _props3.currentImage,
			    onClickThumbnail = _props3.onClickThumbnail,
			    showThumbnails = _props3.showThumbnails,
			    thumbnailOffset = _props3.thumbnailOffset;


			if (!showThumbnails) return;

			return React__default.createElement(PaginatedThumbnails, {
				currentImage: currentImage,
				images: images,
				offset: thumbnailOffset,
				onClickThumbnail: onClickThumbnail
			});
		}
	}, {
		key: 'render',
		value: function render$$1() {
			return React__default.createElement(
				Portal,
				null,
				this.renderDialog()
			);
		}
	}]);
	return Lightbox;
}(React.Component);

Lightbox.propTypes = {
	backdropClosesModal: PropTypes.bool,
	closeButtonTitle: PropTypes.string,
	currentImage: PropTypes.number,
	customControls: PropTypes.arrayOf(PropTypes.node),
	enableKeyboardInput: PropTypes.bool,
	imageCountSeparator: PropTypes.string,
	images: PropTypes.arrayOf(PropTypes.shape({
		src: PropTypes.string.isRequired,
		srcset: PropTypes.array,
		caption: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
		thumbnail: PropTypes.string
	})).isRequired,
	isOpen: PropTypes.bool,
	leftArrowTitle: PropTypes.string,
	onClickImage: PropTypes.func,
	onClickNext: PropTypes.func,
	onClickPrev: PropTypes.func,
	onClose: PropTypes.func.isRequired,
	preloadNextImage: PropTypes.bool,
	rightArrowTitle: PropTypes.string,
	showCloseButton: PropTypes.bool,
	showImageCount: PropTypes.bool,
	showThumbnails: PropTypes.bool,
	theme: PropTypes.object,
	thumbnailOffset: PropTypes.number,
	width: PropTypes.number
};
Lightbox.defaultProps = {
	closeButtonTitle: 'Close (Esc)',
	currentImage: 0,
	enableKeyboardInput: true,
	imageCountSeparator: ' of ',
	leftArrowTitle: 'Previous (Left arrow key)',
	onClickShowNextImage: true,
	preloadNextImage: true,
	rightArrowTitle: 'Next (Right arrow key)',
	showCloseButton: true,
	showImageCount: true,
	theme: {},
	thumbnailOffset: 2,
	width: 1024
};
Lightbox.childContextTypes = {
	theme: PropTypes.object.isRequired
};

var defaultStyles = {
	content: {
		position: 'relative'
	},
	figure: {
		margin: 0 // remove browser default
	},
	image: {
		display: 'block', // removes browser default gutter
		height: 'auto',
		margin: '0 auto', // maintain center on very short screens OR very narrow image
		maxWidth: '100%',

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none'
	}
};

return Lightbox;

})));
