import React, {createClass} from 'react';
import {connect}  from 'react-redux';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'
import {VelocityComponent, velocityHelpers} from 'velocity-react'


class FroschKoerper extends React.Component{
    render() {
        return (<div className ="FroschKoerper rechts" ref="FroschKoerper" ></div>);
    }

    componentDidMount(){
        console.log(this.props)
        Velocity(this.refs.FroschKoerper, { 
            top:this.props.steinRef.top-17,
            left:this.props.steinRef.left
        });
        Velocity(this.refs.FroschKoerper, {scaleX: 1.8, scaleY: 1.8});
        Velocity(this.refs.FroschKoerper, 'transition.slideLeftBigIn');
    }

    componentDidUpdate(oldProp, oldState){
        console.log(this.props)
        Velocity(this.refs.FroschKoerper, 
            {top:this.props.rect.top-17, 
             left:this.props.rect.left}, 
            {duration:500, queue:false});
        let horizontalMove = this.props.rect.left != this.props.rect.left;
        let verticalMove = this.props.rect.top != this.props.rect.top;
        if(!verticalMove){
            Velocity(this.refs.FroschKoerper, {top:this.props.rect.top-50}, {duration:200, queue:false});
            Velocity(this.refs.FroschKoerper, {top:this.props.rect.top-17}, {delay:200, duration:250, queue:false});            
        }else if(!horizontalMove){
            Velocity(this.refs.FroschKoerper, {left:this.props.rect.left-17}, {duration:200, queue:false});
            Velocity(this.refs.FroschKoerper, {left:this.props.rect.left}, {delay:200, duration:250, queue:false});
        }
        
    }

    shouldComponentUpdate(nextProp, nextState){
        let zeileGeandert = this.props.rect.top != nextProp.rect.top;
        let spalteGeandert = this.props.rect.left != nextProp.rect.left;
        return zeileGeandert || spalteGeandert;
    }
};

const FroschKoerperMitState = connect(
    (state) => {
        console.log(state.level)
        return {
        steinRef: state.ref.getBoundingClientRect(),
        position: state.level.getSpielSteinPosition(),
        
    }},
    {}
    )(FroschKoerper);

export {FroschKoerperMitState as default};