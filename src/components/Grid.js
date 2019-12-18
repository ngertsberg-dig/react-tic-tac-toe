import React from 'react';
import Square from './Square';

const Grid = ( props ) =>{

    return(
        <div className = 'grid'>
            {props.children}
        </div>
    )
}

export default Grid;