let React = require('react');

let StartStein= React.createClass({
	componentDidMount: function () {this.props.onInit(this.props.data)},
	render: function() {
		return (<div className= "StartStein" style={{backgroundColor:'black'}}
		 ></div>);
	}
});

module.exports = StartStein;