import React, {createClass} from 'react';
import SpielZeile from './SpielZeile.jsx';
import {connect}  from 'react-redux';


const LevelComp = createClass({
	render: function() {
		if(!this.props.level){
			return (<div> Kein Level ausgewählt </div>);
		}else {
			var zeilenNr = 0;
			var spielzeilen= this.props.level.array.map(
				zeile =>  (<SpielZeile zeilenNr = {zeilenNr} key= {zeilenNr++} />)
			);
			return (
			<div className="Level" ref="levelDom">
				{spielzeilen}
			</div>
			);
		}

	},


});

const LevelMitState = connect(
	(state) => {return {
		level: state.level
	}},
	{}
	)(LevelComp);

export {LevelMitState as default};