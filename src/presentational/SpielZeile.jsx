let React = require('react');
let ReactRedux = require('react-redux');
let VisibleClick = require('../container/VisibleClick.jsx');
let KeinSpielStein = require('./KeinSpielStein.jsx');
let StartSteinImState = require('../container/StartSteinImState.jsx');

let SpielZeile= React.createClass({
	render: function() {
		var spalte= 0;
		var anzahlSpalten = this.props.data.steine.length;

		var spielsteine= this.props.data.steine.map(stein => {
			var position = {
				x: spalte,
				y: this.props.data.id
			};
			spalte++;
			switch(stein){
				case 'x':
					return (<VisibleClick data={position} key={spalte} />);
				case 's':
					return (<StartSteinImState data={position} key={spalte}/>);
				default :
					return (<KeinSpielStein data={position} key={spalte}/>);

			}
			
		});
		return (<div className="SpielZeile" class="SpielZeile">{spielsteine}</div>);
	}
});




module.exports = SpielZeile;