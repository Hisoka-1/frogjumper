import React, {createClass} from 'react'
import {connect} from 'react-redux'
import Actions from '../js/actions.es6'
import Frosch from './Frosch.jsx'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const SpielStein= createClass({
	render: function() {
		const clickHandler = this.props.typ != " " ?()=> this.props.onTodoClick(this.props.position):()=>{};
		var frosch = (x) => {return x=='s'?(<Frosch key='x' />) : '';} ;
		return (
        
		<div className= "SpielStein" 
		 style={this.props.style}
		 onClick = {clickHandler}
		 data-typ = {this.props.typ}
		 ref = {(c) => this.ref = c}
		 key = {this.props.position}
		 >
		 <ReactCSSTransitionGroup 
            transitionName="letter" 
            transitionEnterTimeout={3000} 
            transitionLeaveTimeout={3000}>{frosch(this.props.typ)}</ReactCSSTransitionGroup></div>);
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
		if(this.props.typ == 's')
			console.log(this.ref)
	},
	componentDidUpdate: function() {
		//var spielposition = document.querySelector('[data-typ=s]');
		//console.log (spielposition.getBoundingClientRect() + '');
		if(this.props.typ == 's')
			console.log(this.ref)
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