import React, {createClass} from 'react';
import {connect}  from 'react-redux';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'
import {VelocityComponent, velocityHelpers} from 'velocity-react'
import FroschKoerper from './FroschKoerper.jsx'



class Frosch extends React.Component{
    render() {
        
        let rect = {}
        let figur = null;
        if(!this.altSteinRef){
            this.altSteinRef = rect
        }
        if(!!this.props.steinRef){
            rect = this.props.steinRef.getBoundingClientRect(); 
            figur = <FroschKoerper rect={rect} ></FroschKoerper>
        }

        return (
            figur
        );
    }
    componentWillUpdate(nextProp, nextState){
        if(this.props.steinRef !== undefined){
            this.altSteinRef = this.props.steinRef.getBoundingClientRect()            
        }
    }
    componentDidMount(){
        
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