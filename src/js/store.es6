var Redux = require('redux');

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
		default:
			return state;
	};
	return state;
};

let store = Redux.createStore(gameLogic);

module.exports = store;
