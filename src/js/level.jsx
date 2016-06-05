var React = require('react');
var ReactDOM = require('react-dom');
var ReactRedux = require('react-redux');
var Redux = require('redux');

var store = require('./store.es6'); //Redux.createStore((x,y)=>{console.log("state changed"); return x;} , "Start");
var actions = require('./actions.es6');
var levels= require('./maps.json');
var gewuenschteslevel = location.search.slice(1);
/*
beinhaltet dargestellten SpielZeilen
*/
var Level= React.createClass({
	//wenn dom erzeugt wird
	componentWillMount: function() {

		//gewuenschteslevel = location.search.slice(1);
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
			var position = {
				x: spalte,
				y: this.props.data.id
			};
			spalte++;
			if(stein == 'x'){
				return (<SpielStein data={position} key={spalte} />);
			}else {
				return (<KeinSpielStein data={position} key={spalte}/>);
			}
			
		});
		return (<div className="SpielZeile" class="SpielZeile">{spielsteine}</div>);
	}
});

var SpielStein= React.createClass({
	render: function() {
		return (<div className= "SpielStein" 
		 //onClick = {onSpielsteinClick(this.props.data)}
		 ></div>);
	}
});

SpielStein = ReactRedux.connect(var x,
	(dispatch) => {
		return {onClick: (id)=> {dispatch(actions.spielsteinGeklickt(id))}};
	}
	)(SpielStein);

var KeinSpielStein= React.createClass({
	render: function(){
		return (<div className= "KeinSpielStein" />);
	}
});

var Frosch = React.createClass({
	render: function(){
		return (<div className="Frosch" />);
	}
});

ReactDOM.render(
	<ReactRedux.Provider store={store}>
		<Level data={levels[gewuenschteslevel]} />
	</ReactRedux.Provider>
	, document.getElementById('level'));

