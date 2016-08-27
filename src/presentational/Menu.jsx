import React, {createClass} from 'react';
import {connect}  from 'react-redux';
import text from './text.json';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Menu = createClass({
    render: function() {
        var title = text[0]['german']['title']
        var chars = []
        chars = Array.from(title)
        console.log(chars);
            return (
                <div className="TitelZeile">
                    {
                        chars.map( (x,i) => <span className = "Titel" key={i}>{x}</span>)
                    }
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