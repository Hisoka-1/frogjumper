let React = require('react');
let SpielZeile = require('./SpielZeile.jsx');

let Level = React.createClass({
	render: function() {
		if(!this.props.data){
			return (<div> Kein Level ausgewählt </div>);
		}else {
			var spielzeilen= this.props.data.map(
				zeile =>  (<SpielZeile data= {zeile} key= {zeile.id} />)
			);
			return (
			<div className="Level" ref="levelDom">
				{spielzeilen}
			</div>
			);
		}

	},


});


module.exports = Level;