import React, {createClass} from 'react';
import {connect}  from 'react-redux';



const Frosch = createClass({
    render: function() {
        return (<div className='Frosch'>
                {this.props.position}
            </div>);
    },


});

const FroschMitState = connect(
    (state) => {return {
        position: state.spielSteinPosition
    }},
    {}
    )(Frosch);

export {FroschMitState as default};