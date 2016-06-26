
module.exports.spielsteinGeklickt = (position) => {
	return {
		type: 'spielsteinGeklickt',
		position: position
	};
};

module.exports.startSteinInitialisiert = (position) => {
	return {
		type: 'startSteinInitialisiert',
		position: position
	};
};

module.exports.loadLevel = (level) => {
	return {
		type: 'loadLevel',
		level: level
	};
};