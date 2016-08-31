import Level from '../entities/Level.es6';
import levels from '../js/maps.json';

module.exports.spielsteinGeklickt = (position) => {
	return {
		type: 'spielsteinGeklickt',
		position: position,
	};
};

module.exports.startSteinInitialisiert = (position) => {
	return {
		type: 'startSteinInitialisiert',
		position: position
	};
};

module.exports.loadLevel = (levelNr) => {
	return {
		type: 'loadLevel',
		level: new Level(levels[levelNr])
	};
};

module.exports.menueButtonGeklickt = () => {
	return {

	};
};

module.exports.spielSteinGesetzt = (ref) =>{
	console.log("action mit " + ref)
	return {
		type: 'spielSteinGesetzt',
		ref : ref
	};
};