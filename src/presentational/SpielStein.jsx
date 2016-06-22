let React = require('react');

let SpielStein= React.createClass({
	render: function() {
		return (<div className= "SpielStein" style={{backgroundColor:'white'}}
		 onClick = {()=> this.props.onTodoClick(this.props.data)}
		 ></div>);
	}
});

module.exports = SpielStein;