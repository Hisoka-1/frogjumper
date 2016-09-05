import React, {createClass} from 'react';
import {connect}  from 'react-redux';
import text from './text.json';
import Button from './MenuButton.jsx'
import levels from '../js/maps.json'
import Splash from './Splash.jsx'


const Menu = createClass({
    render: function() {
        console.log(text);
        var title = text['german']['title']
        var leicht = text['german']['easy']
        var mittel = text['german']['medium']
        var schwer = text['german']['hard']
        var chars = []
        
            return (
                <div className="TitelZeile">
                    
                    <Splash text= {title} />
                    <Button text = {leicht} level={1} ></Button>
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