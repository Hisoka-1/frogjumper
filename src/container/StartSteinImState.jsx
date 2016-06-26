import React from 'react'
import {connect}  from 'react-redux'
import StartStein  from '../presentational/StartStein.jsx'
import {startSteinInitialisiert}  from '../js/actions.es6'

const mapDispatchToProps = (dispatch) => {
  return { 
	    onInit: (id) => {
	      dispatch(startSteinInitialisiert(id))
	    }
	}
}

const StartSteinImState = connect(
	()=>{return {}},
	mapDispatchToProps
	)(StartStein);

export {StartSteinImState as default};