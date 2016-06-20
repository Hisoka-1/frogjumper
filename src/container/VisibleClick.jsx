let React = require('react');
let ReactRedux = require('react-redux');
let SpielStein = require('../presentational/SpielStein.jsx')
let Actions = require('../js/actions.es6');

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(Actions.spielsteinGeklickt(id))
    }
  }
}

const VisibleClick = ReactRedux.connect(
	()=>{return {}},
	mapDispatchToProps
	)(SpielStein);




module.exports = VisibleClick;