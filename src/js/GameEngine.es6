import Position from '../entities/Position.es6';
import Level from '../entities/Level.es6';

export function handleMove(level, neuePosition){
	var aktuellePosition;

	if(level.moveErlaubt(neuePosition)){
		return new Level(level.array.map((zeile, zeileNr) => {
			return zeile.map((typ, spalteNr) =>{
				if(typ == 's'){
					return ' ';
				}else if(spalteNr == neuePosition.spalte && zeileNr == neuePosition.zeile){
					return 's';
				}else {
					return typ;
				}
			});
			
		}));
	}

	return level;
}

export function isGewonnen(level){
	for( let zeile of level.array){
		for( let stein of zeile){
			if(stein == 'x')
				return false;
		}	
	}
	return true;
}