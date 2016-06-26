import {createStore} from 'redux'

const intitalState = {
	state:'Anfang',
	spielSteinPositon: {x:0, y:0}
};

function gameLogic(state = intitalState, action) {
	console.log(action.position);
	switch(action.type){
		case 'spielsteinGeklickt':
			return Object.assign({}, state, {
				state:'Begonnen',
				spielSteinPositon : action.position
			});

		case 'startSteinInitialisiert':
			return Object.assign({}, state, {
				state:'startSteinInitialisiert',
				spielSteinPositon: action.position
			});
		case 'loadLevel':
			return Object.assign({}, state, {
				state:'loadLevel',
				level: action.level
			});
		default:
			return state;
	};
	return state;
};

const Store = createStore(gameLogic, intitalState, window.devToolsExtension());

export {Store as default};
