let React = require('react');
let ReactRedux = require('react-redux');
let StartStein = require('../presentational/StartStein.jsx')
let Actions = require('../js/actions.es6');

const mapDispatchToProps = (dispatch) => {
  return { 
	    onInit: (id) => {
	      dispatch(Actions.startSteinInitialisiert(id))
	    }
	}
}

const StartSteinImState = ReactRedux.connect(
	()=>{return {}},
	mapDispatchToProps
	)(StartStein);




module.exports = StartSteinImState;