import React, {createClass} from 'react';
import {connect}  from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Motion, TransitionMotion, spring} from 'react-motion';



class Frosch extends React.Component{
    render() {
        let className = 'Frosch ' + 'rechts';
        let rect = {left:0, top:0}
        if(!!this.props.steinRef){
            rect = this.props.steinRef.getBoundingClientRect();       
        }
        let style = {
            position:'absolute',
            left:rect.left,
            top:rect.top + 25
        };
        return (
            <div className={className} data-pos = 'x' style = {style}></div>
        );
    }
    componentWillUpdate(nextProp, nextState){
        if(!nextProp.position.equals(this.props.position)){

            console.log(nextProp);
            console.log(nextProp.steinRef);    
        }
        
    }
    componentWillMount(){
        console.log(this.props.steinRef)
        console.log('componentWillMount');
    }
};

const FroschMitState = connect(
    (state) => {
        return {
        steinRef: state.ref,
        position: state.level.getSpielSteinPosition(),
        
    }},
    {}
    )(Frosch);

export {FroschMitState as default};