'use strict';

// const React = require('react');
// const ReactDOM = require('react-dom');

// require('../mathquill/mathquill')

var MathInput = require('./components/app');

// var inputlist = document.querySelectorAll("div.math-input");

// for(var index=0;index<inputlist.length;index++)
// {
// 	var myid = inputlist[index].id;
// 	ReactDOM.render(<MathInput containerid={myid} focusCallback={()=>{
//         console.log('on focus')
//     }} blurCallback={() => {
//         console.log('did dismiss')
//     }} extraKeys={['CUP', 'CAP', 'INFTY', 'HALFCOORDINATE', 'HALFCLOSURE', 'COORDINATE', 'CLOSURE', 'DELTA', 'BIGTRIANGLEUP', 'HUO', 'SIM', 'CONG', 'PERP','QIE','APPROX', 'TRIANGLE', 'BECAUSE', 'THEREFORE', 'ODOT', 'MAO', 'ANGLE', 'JIAO', 'PERCENT', 'DU', 'DEGREE', 'GAMMA', 'EPSILON', 'VAREPSILON', 'ZETA','ETA','VARTHETA','IOTA','KAPPA', 'LAMBDA','MU','NU','XI','RHO','SIGMA','TAU', 'UPSILON', 'CHI', 'PSI', 'OMEGA','PI','ALPHA','BETA','PRIME','DPRIME','DOT','SUBSCRIPT','VEC','OVERLINE','ABS','FRAC_GROUP','PARALLELOGRAM']} defaultValue={"\\left(4\\right)^5\\sqrt5{9}"}/>, inputlist[index],);
//   }


module.exports = MathInput;