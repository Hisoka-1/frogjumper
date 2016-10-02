import React, {createClass} from 'react';
import {connect}  from 'react-redux';
import 'velocity-animate'
import 'velocity-animate/velocity.ui'
import {VelocityComponent, velocityHelpers} from 'velocity-react'

const jump = new Audio('./sound/jump.mp3');

class FroschKoerper extends React.Component{

    render() {        
        return (<div className ="FroschKoerper" ref="FroschKoerper" ></div>);
    }

    componentDidMount(){

        Velocity(this.refs.FroschKoerper, { 
            top:this.props.steinRef.top-17,
            left:this.props.steinRef.left
        });
        Velocity(this.refs.FroschKoerper, {scaleX: 1.8, scaleY: 1.8});
        Velocity(this.refs.FroschKoerper, 'transition.slideLeftBigIn');
        Velocity(this.refs.FroschKoerper,
            {backgroundPositionX:[-96,0], backgroundPositionY:[-300, -300]},{easing:[2], duration:2000, loop:true });
    }

    componentWillUpdate(nextProp, nextState){

    }

    componentDidUpdate(oldProp, oldState){
        Velocity(this.refs.FroschKoerper,"stop", true);

        let coord = calculate(this.props, oldProp)
        
        Velocity(this.refs.FroschKoerper,
            {backgroundPositionX:coord.bx, backgroundPositionY:coord.by},{easing:[1], duration:500});

        Velocity(this.refs.FroschKoerper, 
            {top:this.props.rect.top-17, 
             left:this.props.rect.left}, 
            {duration:500, queue:false});
        

        let horizontalMove = this.props.rect.left != this.props.rect.left;
        let verticalMove = this.props.rect.top != this.props.rect.top;
        if(!verticalMove){
            Velocity(this.refs.FroschKoerper, {top:this.props.rect.top-75}, {duration:200, queue:false});
            Velocity(this.refs.FroschKoerper, {top:this.props.rect.top-17}, {delay:210, duration:250, queue:false});            
        }else if(!horizontalMove){
            Velocity(this.refs.FroschKoerper, {left:this.props.rect.left-17}, {duration:200, queue:false});
            Velocity(this.refs.FroschKoerper, {left:this.props.rect.left}, {delay:210, duration:250, queue:false});
        }

        
        console.log(this.props.frisch)
        if(this.props.frisch){
            Velocity(this.refs.FroschKoerper,
            {backgroundPositionX:[-96,0], backgroundPositionY:[-300,-300]},{easing:[2], duration:2000, loop:true });            
        }else {
            Velocity(this.refs.FroschKoerper,
            {backgroundPositionX:[-96,0], backgroundPositionY:coord.lY},{easing:[2], duration:2000, loop:true });    
        }
        
        jump.play();
        setTimeout( ()=> { jump.pause(); jump.currentTime = 0;}, 700);
        
    }

    shouldComponentUpdate(nextProp, nextState){
        let zeileGeandert = this.props.rect.top != nextProp.rect.top;
        let spalteGeandert = this.props.rect.left != nextProp.rect.left;
        return zeileGeandert || spalteGeandert;
    }
};

const FroschKoerperMitState = connect(
    (state) => {
        return {
        steinRef: state.ref.getBoundingClientRect(),
        position: state.level.getSpielSteinPosition(),
        frisch: state.frisch
    }},
    {}
    )(FroschKoerper);

let calculate = (neu, alt)=>{
    if(neu.position.zeile < alt.position.zeile) //oben
        return {bx:[0,-96], by:[-144,-144], lY:[-340,-340]}
    if(neu.position.zeile > alt.position.zeile) //unten
        return {bx:[0,-96], by:[0,0], lY: [-195, -195]}
    if(neu.position.spalte < alt.position.spalte) //links
        return {bx:[0,-96], by:[-48,-48], lY: [-252, -252]}
    if(neu.position.spalte > alt.position.spalte) //rechts
        return {bx:[0,-96], by:[-96,-96], lY: [-300, -300]}
    return {bx:[0,-96], by:[-300,-300]}
}

export {FroschKoerperMitState as default};