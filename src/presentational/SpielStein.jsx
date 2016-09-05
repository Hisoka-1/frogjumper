import React, {createClass} from 'react'
import {connect} from 'react-redux'
import Actions from '../js/actions.es6'
import Frosch from './Frosch.jsx'

const SpielStein= createClass({
	render: function() {
		const clickHandler = this.props.typ != " " ?()=> this.props.onTodoClick(this.props.position):()=>{};
		return (
        
		<div className= "SpielStein" 
		 style={this.props.style}
		 onClick = {clickHandler}
		 data-typ = {this.props.typ}
		 ref = "SpielStein"
		 key = {this.props.position}
		 >
		 	{false && this.props.typ == 's' && <Frosch key={this.props.typ}/> }
		 </div>
		 );
	},
	statics: {
		getTyp: function(level, position){
			return level.array[position.zeile][position.spalte];
		},
		getBackgroundColor(typ){
			switch (typ) {
				case "x": return 'white';
				case " ": return '';
				case "s": return 'black';
				default : return '';
			}
		}
	},
	componentDidMount: function () {
		if(this.props.typ == 's'){
			this.props.onSpielSteinGesetzt(this.refs.SpielStein)
		}
	},
	componentWillUpdate: function(nextProp, nextState){
		if(!this.props.spielStein.equals(nextProp.spielStein))
			if(nextProp.spielStein.equals(this.props.position) )
				this.props.onSpielSteinGesetzt(this.refs.SpielStein)
	}

});

const SpielSteinMitState = connect(
	(state, ownProps)=>{
		var typ = SpielStein.getTyp(state.level, ownProps.position);
		return {
		typ:typ,
		style: {backgroundColor:SpielStein.getBackgroundColor(typ)},
		spielStein: state.level.getSpielSteinPosition()
	}} ,
	(dispatch) => {return {
		onTodoClick: (id) => {
      		dispatch(Actions.spielsteinGeklickt(id))
    	},
    	onSpielSteinGesetzt: (ref) => {
    		dispatch(Actions.spielSteinGesetzt(ref))}
	}}
	)(SpielStein);


export {SpielSteinMitState as default};