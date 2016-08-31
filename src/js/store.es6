import {createStore} from 'redux';
import * as GameEngine from './GameEngine.es6';

const intitalState = {
	count:0,
	spielSteinPositon: {x:0, y:0}
};

function gameLogic(state = intitalState, action) {
	switch(action.type){
		case 'spielsteinGeklickt':
			return Object.assign({}, state, {
				count:state.count+1,
				level: GameEngine.handleMove(state.level, action.position)
			});

		case 'startSteinInitialisiert':
			return Object.assign({}, state, {
				count:state.count+1,
				spielSteinPositon: action.position
			});
		case 'loadLevel':
			return Object.assign({}, state, {
				count: state.count+1,
				level: action.level
			});
		case 'spielSteinGesetzt':
			return Object.assign({}, state, {
				count: state.count+1,
				ref: action.ref
			});
		default:
			return state;
	};
	return state;
};

const Store = createStore(gameLogic, intitalState, window.devToolsExtension !== undefined ? window.devToolsExtension() : undefined);

export {Store as default};
