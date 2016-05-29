var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});


ReactDOM.render(<HelloMessage name="Jonton2" />, document.getElementById('content'));
