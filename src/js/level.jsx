/*
beinhaltet dargestellten SpielZeilen
*/
var Level= React.createClass({
	render: function() {

		var spielzeilen= this.props.data.map(function(zeile) {
			return (<SpielZeile data= {zeile} key= {zeile.id} />);
		});


		return (
			<div className="level" class="level" x="x">
				{spielzeilen}
			</div>

			);
	}
});

/*
beinhaltet alle Spielsteine in einer Zeile, Lücken sind KeineSpielSteine
*/
var SpielZeile= React.createClass({
	render: function() {
		//var spielzeile= this.props.data.map(function(zeile) {
			//return (zeile.steine.map(function(zeichen)){
		var spalte= 0;
		var spielsteine= this.props.data.steine.map(function(stein){
			spalte++;
			if(stein== 'x'){
				return (<SpielStein data={stein} key={spalte} />);
			}else {
				return (<KeinSpielStein key={spalte}/>);
			}
			
		});
		return (<div className="SpielZeile" class="SpielZeile">{spielsteine}</div>);
	}
});

var SpielStein= React.createClass({
	render: function() {
		return (<span className= "SpielStein" ></span>);
	}
});

var KeinSpielStein= React.createClass({
	render: function(){
		return (<span className= "KeinSpielStein" />);
	}
});
var level1= [
	{id: 1, steine:['x', 'x', 'x', 'x', ' ']}];

ReactDOM.render(<Level data={level1}/>, document.getElementById('level'));
