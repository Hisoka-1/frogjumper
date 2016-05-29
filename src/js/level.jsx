/*
beinhaltet dargestellten SpielZeilen
*/
var Level= React.createClass({
	componentDidMount: function() {
		//console.log(this.refs.levelDom.getDOMNode().width);
	},
	render: function() {

		var spielzeilen= this.props.data.map(function(zeile) {
			return (<SpielZeile data= {zeile} key= {zeile.id} />);
		});


		return (
			<div className="Level" ref="levelDom">
				{spielzeilen}
			</div>

			);
	},


});

/*
beinhaltet alle Spielsteine in einer Zeile, Lücken sind KeineSpielSteine
*/
var SpielZeile= React.createClass({
	render: function() {
		//var spielzeile= this.props.data.map(function(zeile) {
			//return (zeile.steine.map(function(zeichen)){
		var spalte= 0;
		var anzahlSpalten = this.props.data.steine.length;
		
		var spielsteine= this.props.data.steine.map(function(stein){
			spalte++;
			var spanStyle = {
				//left: ((100/(anzahlSpalten+1)) * (spalte+1) + '%')
				//width : (100/(anzahlSpalten+1)) + '%'
			};

			if(stein== 'x'){
				return (<SpielStein data={spanStyle} key={spalte} />);
			}else {
				return (<KeinSpielStein data={spanStyle} key={spalte}/>);
			}
			
		});
		return (<div className="SpielZeile" class="SpielZeile">{spielsteine}</div>);
	}
});

var SpielStein= React.createClass({
	render: function() {
		console.log(this.props);
		return (<div className= "SpielStein" style={this.props.data}></div>);
	}
});

var KeinSpielStein= React.createClass({
	render: function(){
		return (<div className= "KeinSpielStein" style={this.props.data}/>);
	}
});
var level1= [
	{id: 1, steine:['x', 'x', 'x', 'x', ' ']}];

ReactDOM.render(<Level data={level1}/>, document.getElementById('level'));
