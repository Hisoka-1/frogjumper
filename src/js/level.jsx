var Level = React.createClass({
	render: function() {
		return (
			<div className="level" class="level" x="x">
				<Spielstein />
			</div>

			);
	}
});

var Spielstein = React.createClass({
	render: function() {
		return (<div className="spielstein" class="spielstein">x</div>);
	}
});

ReactDOM.render(<Level />, document.getElementById('level'));
ReactDOM.render(<Level />, document.getElementById('level'));