var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes');
var Profile = require('./components/Profile');
var ParentComponent= require('./components/ParentComponent');

//ReactDOM.render(<ParentComponent />, document.getElementById('app'));



ReactDOM.render(
	routes,
	document.getElementById('app')
);














