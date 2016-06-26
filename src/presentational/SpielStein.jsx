import React, {createClass} from 'react';

const SpielStein= createClass({
	render: function() {
		return (<div className= "SpielStein" style={{backgroundColor:'white'}}
		 onClick = {()=> this.props.onTodoClick(this.props.data)}
		 ></div>);
	}
});

export {SpielStein as default};