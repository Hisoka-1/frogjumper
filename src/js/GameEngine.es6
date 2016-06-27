export function moveErlaubt(level, neuePosition){
	return true;
}

export function handleMove(level, neuePosition){
	var letzerClickPos;
	for(const [index, element] of level.entries()){
		var x = element.findIndex(x => x == 's');
		if(x != -1){
			letzerClickPos = {x, index};
			console.log(`letzer click war: ${letzerClickPos.x} ${letzerClickPos.index}`);
		}
	}

	console.log(neuePosition);
	return level.map((x, pos) => {
		if(x == 's'){
			return ' ';
		}else if(pos == neuePosition){
			return 's';
		}else {
			return x;
		}
	});
}