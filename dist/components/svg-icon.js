'use strict';

/**
 * A component that renders a single SVG icon.
 */

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');
var ReactDOM = require('react-dom');

var Iconography = require('./iconography');

var SvgIcon = createReactClass({
    displayName: 'SvgIcon',

    propTypes: {
        color: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    },

    componentDidMount: function componentDidMount() {
        this._addFillRule();
    },
    componentDidUpdate: function componentDidUpdate(prevProps) {
        if (prevProps.name !== this.props.name) {
            this._addFillRule();
        }
    },
    _addFillRule: function _addFillRule() {
        // TODO(kevinb) remove this when we upgrade to React 15.
        var node = ReactDOM.findDOMNode(this);
        if (node instanceof SVGElement) {
            var firstGroup = node.querySelector('g');
            firstGroup.setAttributeNS(null, 'fill-rule', 'evenodd');
        }
    },
    render: function render() {
        var _props = this.props,
            color = _props.color,
            name = _props.name;


        var SvgForName = Iconography[name];
        return React.createElement(SvgForName, { color: color });
    }
});

module.exports = SvgIcon;