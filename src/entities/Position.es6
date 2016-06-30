export default class Position {
        constructor(zeile, spalte) {
            this.zeile = zeile;
            this.spalte = spalte;
        }
        toString() {
            return '(' + this.zeile + ', ' + this.spalte + ')';
        }
        equals(other){
        	if(! (other instanceof Position)){
        		return false;
        	}
        	return (other.zeile == this.zeile) && (other.spalte == this.spalte);
        }

        hasNegative(){
        	return (this.zeile < 0) || (this.spalte < 0);
        }
    }