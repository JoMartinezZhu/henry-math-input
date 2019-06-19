/**
 * A component that renders an icon with math (via KaTeX).
 */

const React = require('react');
const createReactClass = require('create-react-class')
const PropTypes = require('prop-types')
const ReactDOM = require('react-dom');
const {StyleSheet} = require('aphrodite');

const {View} = require('../fake-react-native-web');
const {row, centered} = require('./styles');
const {iconSizeHeightPx, iconSizeWidthPx} = require('./common-style');

const MathIcon = createReactClass({
    propTypes: {
        math: PropTypes.string.isRequired,
        style: PropTypes.any,
    },

    componentDidMount() {
        this._renderMath();
    },

    componentDidUpdate(prevProps) {
        if (prevProps.math !== this.props.math) {
            this._renderMath();
        }
    },
    componentWillUnmount(){
      this._renderMath();
    },

    _renderMath() {
        const {math} = this.props;

        if(typeof window.katex!== 'undefined') {
            window.katex.render(math, ReactDOM.findDOMNode(this),{
              displayMode: true,
            });
        }
    },

    render() {
        const {style} = this.props;

        const containerStyle = [
            row,
            centered,
            styles.size,
            styles.base,
            ...(Array.isArray(style) ? style : [style]),
        ];

        return <View style={containerStyle} />;
    },
});

const styles = StyleSheet.create({
    size: {
        height: iconSizeHeightPx,
        width: iconSizeWidthPx,
    },

    base: {
        fontSize: 25,
    },
});

module.exports = MathIcon;
