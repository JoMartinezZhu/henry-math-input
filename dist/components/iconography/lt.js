'use strict';

/**
 * An autogenerated component that renders the LT iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');

var Lt = createReactClass({
    displayName: 'Lt',

    propTypes: {
        color: PropTypes.string.isRequired
    },

    render: function render() {
        return React.createElement(
            'svg',
            { width: '48', height: '48', viewBox: '0 0 48 48' },
            React.createElement(
                'g',
                { fill: 'none', fillRule: 'evenodd' },
                React.createElement('path', { fill: 'none', d: 'M0 0h48v48H0z' }),
                React.createElement('path', { fill: 'none', d: 'M12 12h24v24H12z' }),
                React.createElement('path', { stroke: this.props.color, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M32 30l-16-6 16-6' })
            )
        );
    }
});

module.exports = Lt;