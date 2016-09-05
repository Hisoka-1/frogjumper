import React, {createClass} from 'react'
import {connect} from 'react-redux'
import Actions from '../js/actions.es6'
import Frosch from './Frosch.jsx'
import 'velocity-animate'
import 'velocity-animate/velocity.ui'

const SpielStein= createClass({
    render: function() {
        const clickHandler = this.props.typ != " " ?()=> this.props.onTodoClick(this.props.position):()=>{};
        return (
        
        <div 
         style={{width:50, height:50, margin:25, display:'inline-block'}}
         onClick = {clickHandler}
         key = {this.props.position}
         >
            <span ref="x" style={
                {   width:50,
                    height:50,
                    backgroundImage: 'url("../sprites/lilypad.png")',
                    backgroundSize: '100% 100%',
                    display:'inline-block'
                }
            }></span>
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
        if(this.props.typ != nextProp.typ){
            if(nextProp.typ == ' '){
                Velocity(this.refs.SpielStein, 'transition.slideDownOut', {display:'inline-block'});
                Velocity(this.refs.SpielStein, {display:'inline-block'});
            }
        }
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