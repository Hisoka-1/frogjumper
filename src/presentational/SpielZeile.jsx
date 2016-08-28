import React, {createClass} from 'react';
import {connect} from 'react-redux'
import SpielStein from './SpielStein.jsx'
import Position from '../entities/Position.es6'

let SpielZeile= createClass({
	render: function() {
		var spalte= 0;
		var spielsteine= this.props.level.array[this.props.zeilenNr].map(stein => {
			const position = new Position(this.props.zeilenNr, spalte);
			spalte++;
			return (<SpielStein typ = {stein} position={position} key = {spalte}/>);
		});
		return (<div className="SpielZeile" >{spielsteine}</div>);
	},
});

const SpielZeileMitState = connect(
	(state)=>{return {
		level:state.level
	}},
	{}
	)(SpielZeile);

export {SpielZeileMitState as default};