var React = require('react');
var ReactDOM = require('react-dom');
var ReactRedux = require('react-redux');
var Redux = require('redux');
/*
beinhaltet dargestellten SpielZeilen
*/
var Level= React.createClass({
	componentDidMount: function() {
		//console.log(this.refs.levelDom.getDOMNode().width);
	},
	render: function() {

		var spielzeilen= this.props.data.map(
			zeile =>  (<SpielZeile data= {zeile} key= {zeile.id} />)
		);

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
		
		var spielsteine= this.props.data.steine.map(stein => {
			spalte++;
			var spanStyle = {};
			if(stein == 'x'){
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
		return (<div className= "SpielStein" 
		 style={this.props.data}
		 //onClick={() => alert(this.props.data)}
		 onClick = {()=>store.dispatch(clicked)}
		 ></div>);
		 
		 
	}
});

let store = Redux.createStore((x,y)=>{alert("state changed"); return x;} , "Start");

const clicked = {type:"clicked"};


var KeinSpielStein= React.createClass({
	render: function(){
		return (<div className= "KeinSpielStein" style={this.props.data}/>);
	}
});
var level1= [
	{id: 1, steine:['x', 'x', 'x', 'x', ' ']}];

ReactDOM.render(<Level data={level1}/>, document.getElementById('level'));
