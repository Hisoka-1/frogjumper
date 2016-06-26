import React, {createClass} from 'react';
import SpielZeile from './SpielZeile.jsx';

const Level = createClass({
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

export {Level as default};