import React, {createClass} from 'react';
import {connect}  from 'react-redux';
import Button from './MenuButton.jsx'
import levels from '../js/maps.json'
import Splash from './Splash.jsx'
import {getText} from '../js/Util.es6'


const Menu = createClass({
    render: function() {
        
        var title = getText('title');
        var leicht = getText('easy');
        var mittel = getText('medium');
        var schwer = getText('hard');
        console.log(title)
        var chars = []
        
            return (
                <div className="TitelZeile">
                    
                    <Splash text= {title} />
                    <Button text = {leicht} level={0} ></Button>
                    <Button text = {mittel} level={ Math.floor(levels.length/3) * 1 }></Button>
                    <Button text = {schwer} level={ Math.floor(levels.length/3) * 2 }></Button>
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