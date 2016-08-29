import React, {createClass} from 'react';
import {connect}  from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';



const Frosch = createClass({
    render: function() {
        var className = 'Frosch ' + 'rechts';
        return (
            <ReactCSSTransitionGroup 
            transitionName="frosch" 
            transitionEnterTimeout={3000} 
            transitionLeaveTimeout={3000}>
                <div className={className}>
                    {this.props.position}
                </div>
            </ReactCSSTransitionGroup>
        );
    },


});

const FroschMitState = connect(
    (state) => {return {
        position: state.spielSteinPosition
    }},
    {}
    )(Frosch);

export {FroschMitState as default};