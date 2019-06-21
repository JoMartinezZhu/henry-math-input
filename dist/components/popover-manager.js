'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * A component that renders and animates the popovers that appear over the
 * multi-functional keys.
 */

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');

var _require = require('react-transition-group'),
    CSSTransition = _require.CSSTransition;

var KeyConfigs = require('../data/key-configs');
var MultiSymbolPopover = require('./multi-symbol-popover');
var isPc = require('./platform')();

var _require2 = require('./prop-types'),
    boundingBoxPropType = _require2.boundingBoxPropType,
    keyConfigPropType = _require2.keyConfigPropType,
    popoverPropType = _require2.popoverPropType;

var zIndexes = require('./z-indexes');

// NOTE(charlie): These must be kept in sync with the transition durations and
// classnames specified in popover.css.
var animationTransitionName = 'popover';
var animationDurationMs = 200;

// A container component used to position a popover absolutely at a specific
// position.
var PopoverContainer = createReactClass({
    displayName: 'PopoverContainer',

    propTypes: {
        bounds: boundingBoxPropType.isRequired,
        childKeys: PropTypes.arrayOf(keyConfigPropType).isRequired
    },

    render: function render() {
        var _props = this.props,
            bounds = _props.bounds,
            childKeys = _props.childKeys;


        var containerStyle = _extends({
            position: 'absolute',
            overflow: 'auto',
            maxHeight: isPc ? 257 : 'auto',
            // background:'#fff',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
            // ipad上弹出层级问题
            zIndex: zIndexes.popover
        }, bounds);
        //add
        // const containerStyle = {
        //   position: 'absolute',
        //   ...bounds,
        // };
        //

        return React.createElement(
            'div',
            { style: containerStyle },
            React.createElement(MultiSymbolPopover, { keys: childKeys })
        );
    }
});

var PopoverManager = createReactClass({
    displayName: 'PopoverManager',

    propTypes: {
        popover: popoverPropType
    },

    render: function render() {
        var popover = this.props.popover;


        if (!popover) {
            return null;
        }

        return React.createElement(
            CSSTransition,
            {
                className: animationTransitionName,
                enter: true,
                exit: false,
                timeout: { enter: animationDurationMs }
            },
            React.createElement(PopoverContainer, {
                key: popover.childKeyIds[0],
                bounds: popover.bounds,
                childKeys: popover.childKeyIds.map(function (id) {
                    return KeyConfigs[id];
                })
            })
        );
    }
});

module.exports = PopoverManager;