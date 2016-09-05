import {createStore} from 'redux';
import * as GameEngine from './GameEngine.es6';

const intitalState = {
	count:0,
	spielSteinPositon: {x:0, y:0},
	gewonnen:false,

};

function gameLogic(state = intitalState, action) {
	switch(action.type){

		case 'spielsteinGeklickt':
			let newLevel = GameEngine.handleMove(state.level, action.position);
			return Object.assign({}, state, {
				count:state.count+1,
				level: newLevel,
				gewonnen: GameEngine.isGewonnen(newLevel),
			});
		case 'loadLevel':
			return Object.assign({}, state, {
				count: state.count+1,
				level: action.level,
				levelNr: action.levelNr,
				gewonnen: GameEngine.isGewonnen(action.level)
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
