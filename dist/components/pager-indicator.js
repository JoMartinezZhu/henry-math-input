'use strict';

/**
 * A component that renders a view pager indicator, with a circular icon for
 * each page.
 */

var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');

var _require = require('aphrodite'),
    StyleSheet = _require.StyleSheet;

var _require2 = require('../fake-react-native-web'),
    View = _require2.View;

var _require3 = require('./common-style'),
    pageIndicatorHeightPx = _require3.pageIndicatorHeightPx,
    gray68 = _require3.gray68,
    gray85 = _require3.gray85;

var PagerIcon = createReactClass({
    displayName: 'PagerIcon',

    propTypes: {
        active: PropTypes.bool,
        radiusPx: PropTypes.number
    },

    getDefaultProps: function getDefaultProps() {
        return {
            active: false,
            radiusPx: 4
        };
    },
    render: function render() {
        var _props = this.props,
            active = _props.active,
            radiusPx = _props.radiusPx;


        var fillColor = active ? gray68 : gray85;

        return React.createElement(
            'svg',
            { width: 2 * radiusPx, height: 2 * radiusPx },
            React.createElement('circle', {
                cx: radiusPx,
                cy: radiusPx,
                r: radiusPx,
                fill: fillColor
            })
        );
    }
});

var PagerIndicator = createReactClass({
    displayName: 'PagerIndicator',

    propTypes: {
        currentPage: PropTypes.number.isRequired,
        numPages: PropTypes.number.isRequired
    },

    render: function render() {
        var _props2 = this.props,
            currentPage = _props2.currentPage,
            numPages = _props2.numPages;


        var pagerIconRadiusPx = 4;

        // Collect the various indicator circles.
        var indicators = [];
        for (var i = 0; i < numPages; i++) {
            indicators.push(React.createElement(PagerIcon, {
                key: i,
                active: i === currentPage,
                radiusPx: pagerIconRadiusPx
            }));
        }

        // Size the box that contains the icons to accommodate for proper
        // spacing, and let Flexbox take care of the details.
        var totalIconWidthPx = 2 * pagerIconRadiusPx * numPages;
        var totalSpacingWidthPx = 2 * pagerIconRadiusPx * (numPages - 1);
        var iconStripSize = {
            width: totalIconWidthPx + totalSpacingWidthPx
        };

        return React.createElement(
            View,
            { style: styles.indicatorStrip },
            React.createElement(
                View,
                { style: styles.iconStrip, dynamicStyle: iconStripSize },
                indicators
            )
        );
    }
});

var styles = StyleSheet.create({
    indicatorStrip: {
        backgroundColor: '#F0F1F2',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: pageIndicatorHeightPx
    },
    iconStrip: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

module.exports = PagerIndicator;