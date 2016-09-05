import React, {createClass} from 'react';
import {connect}  from 'react-redux';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'
import {VelocityComponent, velocityHelpers} from 'velocity-react'
import FroschKoerper from './FroschKoerper.jsx'



class GewonnenAnimation extends React.Component{
    render() {
        if(!this.props.gewonnen){
            return (<div className="Titel">Gewonnen</div>);
        }
        return null;
    }
};

const GewonnenAnimationMitState = connect(
    (state) => {
        return {
            gewonnen: state.gewonnen
        
    }},
    {}
    )(GewonnenAnimation);

export {GewonnenAnimationMitState as default};