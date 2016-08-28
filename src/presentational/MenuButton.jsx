import React, {createClass} from 'react';
import {connect}  from 'react-redux';
import text from './text.json';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Button = createClass({
    render: function() {        
            return (
                
                    <ReactCSSTransitionGroup transitionName="letter" 
                    transitionAppear={true} 
                    transitionAppearTimeout={500} 
                    transitionEnterTimeout={500} 
                    transitionLeaveTimeout = {500}>
                    <div style={{padding:'20px', alignContent: 'center'}}>
                        <a 
                            className="Button" 
                            style= {{display:'block'}}
                            onClick = {() => this.props.onTodoClick(this.props.text)}
                        >{this.props.text}</a>    
                    </div>
                    </ReactCSSTransitionGroup>
                    
                );
    }
});

const ButtonMitState = connect(
    (state) => {return {
        
    }},
    
    (dispatch) => { 
        return {
            onTodoClick: (id) => {
                //alert(id + 'geklickt')
                dispatch(Actions.spielsteinGeklickt(id))
            }
        }
    }

    )(Button);

export {ButtonMitState as default};