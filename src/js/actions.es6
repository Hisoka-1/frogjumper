import Level from '../entities/Level.es6';
import levels from '../js/maps.json';

module.exports.spielsteinGeklickt = (position) => {
	return {
		type: 'spielsteinGeklickt',
		position: position,
	};
};

module.exports.loadLevel = (levelNr) => {
	return {
		type: 'loadLevel',
		level: new Level(levels[levelNr]),
		levelNr: Number(levelNr),
	};
};

module.exports.resetButtonGeklickt = () => {
	return {
		type: 'resetButtonGeklickt'
	};
};

module.exports.spielSteinGesetzt = (ref) =>{
	return {
		type: 'spielSteinGesetzt',
		ref : ref
	};
};