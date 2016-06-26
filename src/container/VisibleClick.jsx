import React from 'react'
import {connect} from 'react-redux'
import SpielStein from '../presentational/SpielStein.jsx'
import Actions from '../js/actions.es6'

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(Actions.spielsteinGeklickt(id))
    }
  }
}

const VisibleClick = connect(
	()=>{return {}},
	mapDispatchToProps
	)(SpielStein);

export {VisibleClick as default};
