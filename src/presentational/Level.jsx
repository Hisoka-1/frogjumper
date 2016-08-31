import React, {createClass} from 'react';
import SpielZeile from './SpielZeile.jsx';
import {connect}  from 'react-redux';
import Menu from './Menu.jsx'
import Frosch from './Frosch.jsx'


const LevelComp = createClass({
	render: function() {
		if(this.props.level) {
			var zeilenNr = 0;
			var spielzeilen= this.props.level.array.map(
				zeile =>  (<SpielZeile zeilenNr = {zeilenNr} key= {zeilenNr++} />)
			);

			
			return (
			<div className="Level" >
				{spielzeilen}
				<Frosch></Frosch>
			</div>
			);
		}else {
			return (<Menu></Menu>);
		}
		return null;

	},


});

const LevelMitState = connect(
	(state) => {return {
		level: state.level
	}},
	{}
	)(LevelComp);

export {LevelMitState as default};