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
	return level.map((zeile, y) => {
		return zeile.map((typ, x) =>{
			if(typ == 's'){
				return ' ';
			}else if(x == neuePosition.x && y == neuePosition.y){
				return 's';
			}else {
				return typ;
			}
		});
		
	});
}