'use strict';

/**
 * An autogenerated component that renders the EXP iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
var React = require('react');
var createReactClass = require('create-react-class');
var PropTypes = require('prop-types');

var Exp = createReactClass({
    displayName: 'Exp',

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
                React.createElement('path', { d: 'M28 16.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM30 18h4v4h-4v-4zM14 21c0-.552.456-1 1.002-1h9.996A1 1 0 0 1 26 21v14c0 .552-.456 1-1.002 1h-9.996A1 1 0 0 1 14 35V21zm2 1h8v12h-8V22z', fill: this.props.color })
            )
        );
    }
});

module.exports = Exp;