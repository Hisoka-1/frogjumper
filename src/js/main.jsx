var React = require('react');
var ReactDOM = require('react-dom');
var ReactRedux = require('react-redux');
var Redux = require('redux');

var store = require('./store.es6');
var levels= require('./maps.json');
var gewuenschteslevel = location.search.slice(1);
var actions = require('./actions.es6');
/*
beinhaltet dargestellten SpielZeilen
*/
var Level = require('../presentational/Level.jsx');


var Frosch = React.createClass({
	render: function(){
		return (<div className="Frosch" />);
	}
});

const aktuellesLevel = levels[gewuenschteslevel];

ReactDOM.render(
	<ReactRedux.Provider store={store}>
		<Level data={aktuellesLevel} />
	</ReactRedux.Provider>
	, document.getElementById('level'));

store.dispatch(actions.loadLevel(aktuellesLevel))