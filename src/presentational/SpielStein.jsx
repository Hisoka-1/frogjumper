import React, {createClass} from 'react'
import {connect} from 'react-redux'
import Actions from '../js/actions.es6'
import Frosch from './Frosch.jsx'
import 'velocity-animate'
import 'velocity-animate/velocity.ui'

const SpielStein= createClass({
	render: function() {
		const clickHandler = this.props.typ != " " ?()=> this.props.onTodoClick(this.props.position):()=>{};
		let typ = SpielStein.getTyp(this.props.level, this.props.position);
		let url = SpielStein.getBackgroundColor(typ);

		let style = {
			width:50,
		 	height:50,
		 	backgroundImage: `url('${url}')`,
  			backgroundSize: '100% 100%',
  			display:'inline-block',
  			margin:25
  		};

		return (
		<div 
		 style={style}
		 onClick = {clickHandler}
		 ref = "SpielStein"
		 key = {this.props.position}
		 >
		 </div>
		 );
	},
	statics: {
		getTyp: function(level, position){
			return level.array[position.zeile][position.spalte];
		},
		getBackgroundColor(typ){
			switch (typ) {
				case "x": return "../sprites/lilypad.png";
				case " ": return '';
				case "s": return "../sprites/lilypad.png";
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
		if(this.props.typ != nextProp.typ){
			if(nextProp.typ == ' '){
				Velocity(this.refs.SpielStein, 'transition.slideDownOut', {display:'inline-block'});
			}else if(nextProp.typ == 'x' || (this.props.typ == ' ' && nextProp.typ == 's')) {
				Velocity(this.refs.SpielStein, 'transition.bounceIn', {display:'inline-block'});
			}
		}
	},
	componentDidUpdate: function(oldProps, oldState){
		if((this.props.typ == 's' && oldProps.typ == ' ')){
			this.props.onSpielSteinGesetzt(this.refs.SpielStein)
		}
	}

});

const SpielSteinMitState = connect(
	(state, ownProps)=>{
		return {
		level: state.level,
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