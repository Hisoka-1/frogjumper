import Position from '../entities/Position.es6';

export default class Level {
	constructor(array){
		this.array = array;
		this.position = this.getSpielSteinPosition();
		console.log(`position set: ${this.position}`);
	}
	toString(){
		return this.array.toString();
	}
	getSpielSteinPosition(){
		for(const [zeile, element] of this.array.entries()){
			var spalte = element.findIndex(stein => stein == 's');
			if(spalte != -1){
				return new Position(zeile, spalte);
			}
		}
	}

	moveErlaubt(neuePosition){
		if(this.position.equals(neuePosition)){
			return false;
		}
		for(let neighbour of this.getNeighbours().values()){
			if(neuePosition.equals(neighbour)){
				return true;
			}
		}
	}

	getNeighbours(){
		const neighbours = [];

		neighbours.push(this.recursiveNeighbourOneDirection('up'));
		neighbours.push(this.recursiveNeighbourOneDirection('down'));
		neighbours.push(this.recursiveNeighbourOneDirection('left'));
		neighbours.push(this.recursiveNeighbourOneDirection('right'));
		
		console.log(neighbours);
		return neighbours;

	}

	recursiveNeighbourOneDirection(direction, position = this.position){
		let neighbour; 
		switch(direction){
			case 'up': neighbour = new Position(position.zeile-1, position.spalte);
						break;
			case 'down': neighbour = new Position(position.zeile+1, position.spalte);
						break;
			case 'left': neighbour = new Position(position.zeile, position.spalte-1);
						break;
			case 'right': neighbour = new Position(position.zeile, position.spalte+1);
						break;
		}
		if(!neighbour.hasNegative() && !this.outOfBounds(neighbour)){
			const typ = this.getTyp(neighbour);
			if(typ == 'x'){
				return neighbour;
			}else{
				return this.recursiveNeighbourOneDirection(direction, neighbour);
			}
		}
	}

	getTyp(position){
		return this.array[position.zeile][position.spalte];
	}

	outOfBounds(position){
		return (position.zeile >= this.array.length) || (position.spalte >= this.array[0].length);
	}
};