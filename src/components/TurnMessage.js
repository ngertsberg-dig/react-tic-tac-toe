import React from 'react';

const TurnMessage = ( props ) =>{
    const { winner, currentTurn, winnerUser, restartGame, draw} = props;
    let message;
    if(!winner){
        message = 
            <div>
                <h1>Current Turn: {currentTurn}</h1>
            </div>
    }else if(winner){
        message = 
            <div>
                <h1>The Winner is: {winnerUser}</h1>
                <button onClick = {restartGame}>Play Again</button>
            </div>
    }
    if(draw){
        message = 
            <div>
                <h1>Draw Game!</h1>
                <button onClick = {restartGame}>Play Again</button>
            </div>
    }
    

    return(
        <div className = 'turn-message'>
            {message}
        </div>
    )
}

export default TurnMessage;