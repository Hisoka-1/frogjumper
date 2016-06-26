import React, {createClass} from 'react';
import VisibleClick from '../container/VisibleClick.jsx'
import KeinSpielStein from './KeinSpielStein.jsx'
import StartSteinImState from './../container/StartSteinImState.jsx' 

let SpielZeile= createClass({
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




export {SpielZeile as default};