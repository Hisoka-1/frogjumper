import React, {createClass} from 'react'

let StartStein = createClass({
	componentDidMount: function () {this.props.onInit(this.props.data)},
	render: function() {
		return (<div className= "StartStein" style={{backgroundColor:'black'}}
		 ></div>);
	}
});

export {StartStein as default};