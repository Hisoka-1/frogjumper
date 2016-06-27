import React, {createClass} from 'react'
import {connect} from 'react-redux'
import Actions from '../js/actions.es6'

const SpielStein= createClass({
	render: function() {
		const clickHandler = this.props.typ != " " ?()=> this.props.onTodoClick(this.props.position):()=>{};


		return (<div className= "SpielStein" 
		 style={this.props.style}
		 onClick = {clickHandler}
		 ></div>);
	},
	statics: {
		getTyp: function(level, position){
			return level[position.y][position.x];
		},
		getBackgroundColor(typ){
			switch (typ) {
				case "x": return 'white';
				case " ": return '';
				case "s": return 'black';
				default : return '';
			}
		}
	}
});

const SpielSteinMitState = connect(
	(state, ownProps)=>{
		var typ = SpielStein.getTyp(state.level, ownProps.position);
		return {
		typ:typ,
		style: {backgroundColor:SpielStein.getBackgroundColor(typ)}
	}} ,
	(dispatch) => {return {
		onTodoClick: (id) => {
      		dispatch(Actions.spielsteinGeklickt(id))
    }
	}}
	)(SpielStein);

export {SpielSteinMitState as default};