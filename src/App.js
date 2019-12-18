import React from 'react';
import './styles/all-pages.sass'
import LayoutWrapper from './wrappers/LayoutWrapper';
import Grid from './components/Grid';
import Square from './components/Square';
import TurnMessage from './components/TurnMessage';

class App extends React.Component {

  constructor(){
    super();
    this.state = {currentTurn: "x", winner: false, winnerUser: "",draw: false};
    console.log(this.state);

  }
  squareClicked(e){
    if(!this.state.winner && !this.state.draw){
      const square = e.target;
      square.classList.contains("taken") ? this.squareTakenAlert() : this.takeSquare(square);
    }
  }
  takeSquare(square){
    square.classList.add("taken");
    const nextTurn = this.state.currentTurn == "x" ? "o" : "x";
    square.classList.add(this.state.currentTurn);
    this.calculateWin();
    this.setState({
      currentTurn: nextTurn
    })
  }
  calculateWin(){
    const currentPerson = this.state.currentTurn;
    const winScenarios = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    const currentPlots = document.querySelectorAll(`.square.taken.${this.state.currentTurn}`)
    let currentArray = [];
    currentPlots.forEach(plot=>{
      currentArray.push(parseInt(plot.getAttribute("id")))
    })
    console.log(currentArray);
    const win = false;
    winScenarios.forEach(scenario=>{
      var checkCounter = 0;
      scenario.forEach(winCheckSingle=>{
       if(currentArray.includes(winCheckSingle)){
        checkCounter++;
       }
      })
      if(checkCounter == 3){
        this.gameWon(currentPerson);
        return;
      }
    })
    if(document.querySelectorAll(".square.taken").length == 9){
      console.log('done')
      this.setState({
        draw: true
      })
    }
  }
  gameWon(person){
    this.setState({
      winner: true,
      winnerUser: person
    })
  }
  squareTakenAlert(){
    alert("this square is already taken!");
  }

  restartGame(){
    document.querySelectorAll(".square").forEach(el=>{
      el.classList.remove("taken","x","o");
    })
    this.setState({currentTurn: "x", winner: false, winnerUser: "",draw: false});
  }


  render(){
    let squares = [];
    for(var x = 0; x != 9; x++){
        squares.push(<Square clickEvent = {this.squareClicked.bind(this)} key = {x} squareId = {x} />);
    }
    return (
      <LayoutWrapper pageView = 'homepage'>
        <Grid>
          {squares}
        </Grid>
        <TurnMessage draw = {this.state.draw} restartGame = {this.restartGame.bind(this)} winnerUser = {this.state.winnerUser} currentTurn = {this.state.currentTurn} winner = {this.state.winner} />
      </LayoutWrapper>
      
    );
  }
}

export default App;
