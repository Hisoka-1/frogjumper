import React, {createClass} from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Redux from 'redux'
import "babel-polyfill";
import {params} from './Util.es6'

import store from './store.es6'
import levels from './maps.json'

import actions from './actions.es6'

import Level from '../presentational/Level.jsx'


let levelWahl = params()['level'];
if(levelWahl != undefined){
	store.dispatch(actions.loadLevel(params()['level']));	
}


render(
    <span className = "Background">
    	<Provider store={store}>
    		<Level />
    	</Provider>
    </span>
	, document.getElementById('level'));

