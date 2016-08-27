import React, {createClass} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Redux from 'redux'
import "babel-polyfill";

import store from './store.es6'
import levels from './maps.json'

import actions from './actions.es6'

import Level from '../presentational/Level.jsx'
import Menu from '../presentational/Menu.jsx'


const Frosch = createClass({
	render: function(){
		return (<div className="Frosch" />);
	}
});

const urlParam = location.search.slice(1);
const aktuellesLevel = levels[urlParam];

if(aktuellesLevel!==undefined){
	store.dispatch(actions.loadLevel(aktuellesLevel));	
}


render(
    <span className = "Background test">
	<Provider store={store}>
		<Level />
	</Provider>
    </span>
	, document.getElementById('level'));

