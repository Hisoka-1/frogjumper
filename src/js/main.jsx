import React, {createClass} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Redux from 'redux'

import store from './store.es6'
import levels from './maps.json'

import actions from './actions.es6'

import Level from '../presentational/Level.jsx'


const Frosch = createClass({
	render: function(){
		return (<div className="Frosch" />);
	}
});

const urlParam = location.search.slice(1);
const aktuellesLevel = levels[urlParam];

render(
	<Provider store={store}>
		<Level data={aktuellesLevel} />
	</Provider>
	, document.getElementById('level'));

store.dispatch(actions.loadLevel(aktuellesLevel))