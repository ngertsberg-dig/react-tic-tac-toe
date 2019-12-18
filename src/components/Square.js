import React from 'react';

const Square = ( props ) =>{
    return(
        <div id = {props.squareId} onClick = { props.clickEvent } className = 'square'>
            
        </div>
    )
}

export default Square;