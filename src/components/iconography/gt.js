/**
 * An autogenerated component that renders the GT iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
const React = require('react');
const createReactClass = require('create-react-class')
const PropTypes = require('prop-types')

const Gt = createReactClass({
    propTypes: {
        color: PropTypes.string.isRequired,
    },

    render() {
        return <svg width="48" height="48" viewBox="0 0 48 48"><g fill="none" fillRule="evenodd"><path fill="none" d="M0 0h48v48H0z"/><path fill="none" d="M12 12h24v24H12z"/><path stroke={this.props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M16 30l16-6-16-6"/></g></svg>;
    },
});

module.exports = Gt;
