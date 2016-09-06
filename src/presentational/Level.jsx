import React, {createClass} from 'react';
import SpielZeile from './SpielZeile.jsx';
import {connect}  from 'react-redux';
import Menu from './Menu.jsx'
import Frosch from './Frosch.jsx'
import Actions from '../js/actions.es6';
import MenuButton from './MenuButton.jsx'
import GewonnenAnimation from './GewonnenAnimation.jsx'
import Splash from './Splash.jsx'
import {getText} from '../js/Util.es6'




const LevelComp = createClass({
	render: function() {
		if(this.props.level) {
			var zeilenNr = 0;
			var spielzeilen= this.props.level.array.map(
				zeile =>  (<SpielZeile zeilenNr = {zeilenNr} key= {zeilenNr++} />)
			);

			if(this.props.gewonnen){
				setTimeout(()=>{
					console.log("gewonnen")	
					this.props.onTodoClick(this.props.levelNr+1)
				}, 3000);
			}

			return (
			<div className="Level" >
				<Splash visible={this.props.gewonnen} text="Gewonnen"></Splash>
				{spielzeilen}
				<Frosch></Frosch>
				<MenuButton text= {getText("reset")} level = {this.props.levelNr}></MenuButton>
				<MenuButton text= {getText("menu")} ></MenuButton>
				
			</div>
			);
		}else {			
			return (<Menu></Menu>);
		}
		return null;

	}


});

const LevelMitState = connect(
	(state) => {return {
		level: state.level,
		gewonnen: state.gewonnen,
		levelNr: state.levelNr
	}},
	(dispatch) => { 
        return {
            onTodoClick: (id) => {
                dispatch(Actions.loadLevel(id))
            }
        }
	}
	)(LevelComp);

export {LevelMitState as default};