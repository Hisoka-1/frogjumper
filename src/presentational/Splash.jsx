import React, {createClass} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Splash = createClass({
    render: function() {
        let chars = Array.from(this.props.text)
        if(this.props.visible == false){
            return null;
        }
        let style = {}
        if(this.props.visible == true){
            style = {
                position: 'fixed',
                top: '30%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width:'100%',
                };
        }
        return (
            <div style={style}>
                <ReactCSSTransitionGroup transitionName="letter" 
                transitionAppear={true} 
                transitionAppearTimeout={500} 
                transitionEnterTimeout={500} 
                transitionLeaveTimeout = {500}>
                    {chars.map( (x,i) => {
                            return <div 
                            className = "Titel" 
                            key={i}
                            style = {{animationDelay:i+'s'}}
                            >
                            {x}</div>
                        })}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});


export {Splash as default};