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

const urlParam = location.search.slice(1);

if(urlParam!==''){
	store.dispatch(actions.loadLevel(urlParam));	
}


render(
    <span className = "Background">
    	<Provider store={store}>
    		<Level />
    	</Provider>
    </span>
	, document.getElementById('level'));

