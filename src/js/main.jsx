var React = require('react');
var ReactDOM = require('react-dom');
var ReactRedux = require('react-redux');
var Redux = require('redux');

var store = require('./store.es6');
var levels= require('./maps.json');
var gewuenschteslevel = location.search.slice(1);
/*
beinhaltet dargestellten SpielZeilen
*/
var Level = require('../presentational/Level.jsx');


var Frosch = React.createClass({
	render: function(){
		return (<div className="Frosch" />);
	}
});

ReactDOM.render(
	<ReactRedux.Provider store={store}>
		<Level data={levels[gewuenschteslevel]} />
	</ReactRedux.Provider>
	, document.getElementById('level'));

