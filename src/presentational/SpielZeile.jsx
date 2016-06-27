import React, {createClass} from 'react';
import {connect} from 'react-redux'
import SpielStein from './SpielStein.jsx'

let SpielZeile= createClass({
	render: function() {
		var spalte= 0;

		var spielsteine= this.props.level[this.props.zeilenNr].map(stein => {
			var position = {
				x: spalte,
				y: this.props.zeilenNr
			};
			spalte++;
			return (<SpielStein typ = {stein} position={position} key = {spalte}/>);
		});
		return (<div className="SpielZeile" class="SpielZeile">{spielsteine}</div>);
	}
});

const SpielZeileMitState = connect(
	(state)=>{return {
		level:state.level
	}},
	{}
	)(SpielZeile);

export {SpielZeileMitState as default};