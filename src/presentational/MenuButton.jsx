import React, {createClass} from 'react';
import {connect}  from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Actions from '../js/actions.es6'

const Button = createClass({
    render: function() {        
            return (
                
                    <ReactCSSTransitionGroup transitionName="x" 
                    transitionAppear={true} 
                    transitionAppearTimeout={500} 
                    transitionEnterTimeout={500} 
                    transitionLeaveTimeout = {500}>
                    <div style={{padding:'10px', alignContent: 'center'}}>
                        <a 
                            className="Button" 
                            style= {{display:'block'}}
                            onClick = {() => {
                                    !this.props.gewonnen  && this.props.onTodoClick(this.props.level) 
                                }}
                        >{this.props.text}</a>    
                    </div>
                    </ReactCSSTransitionGroup>
                    
                );
    }
});

const ButtonMitState = connect(
    (state) => {return {
        gewonnen : state.gewonnen
    }},
    
    (dispatch) => { 
        return {
            onTodoClick: (id) => {
                if(id == undefined){
                    dispatch(Actions.resetButtonGeklickt());
                }else {
                    dispatch(Actions.loadLevel(id));
                }
                
            }
        }
    }

    )(Button);

export {ButtonMitState as default};