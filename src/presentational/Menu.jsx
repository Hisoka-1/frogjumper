import React, {createClass} from 'react';
import {connect}  from 'react-redux';
import text from './text.json';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Button from './MenuButton.jsx'

const Menu = createClass({
    render: function() {
        console.log(text);
        var title = text['german']['title']
        var leicht = text['german']['easy']
        var mittel = text['german']['medium']
        var schwer = text['german']['hard']
        var chars = []
        
        chars = Array.from(title)
        
            return (
                <div className="TitelZeile">
                    
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
                    <Button text = {leicht}  ></Button>
                    <Button text = {mittel}  ></Button>
                    <Button text = {schwer}  ></Button>
                </div>
                );
    }
});

const MenuMitState = connect(
    (state) => {return {
        
    }},
    {}
    )(Menu);

export {MenuMitState as default};