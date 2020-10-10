import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { v4 as uuidv4 } from 'uuid';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
let historyID = 1;

class App extends React.Component {
constructor(props){
  super(props)
  this.historyRef = React.createRef();
  this.state = {
    dice: [{sides: 4, diceRolled: 1, key: uuidv4()},
      {sides: 6, diceRolled: 1, key: uuidv4()},
      {sides: 8, diceRolled: 1, key: uuidv4()},
      {sides: 10, diceRolled: 1, key: uuidv4()},
      {sides: 12, diceRolled: 1, key: uuidv4()},
      {sides: 20, diceRolled: 1, key: uuidv4()},
      {sides: 100, diceRolled: 1, key: uuidv4()},],
    addDie: 2,
    modifier: 0,
    diceRolled: 1,
    history: [{"max": 20, "result": 1, "mod": 0, "diceRolled": 1, "rolledArrayString": "1", "key": 0}],
    savedRolls: [{"saveDiceRolled": 2, "sides": 4, "modifier": 2, "label": "Healing Potion"},
                 {"saveDiceRolled": 1, "sides": 20, "modifier": 5, "label": "Attack", "advantage": "advantage"}],
    saveLabel: "",
    saveDiceRolled: 1,
    saveRollSides: 2,
    saveRollModifier: 0,
    advantage: false,
    saveRollAdvantage: false,
    disadvantage: false,
    saveRollDisadvantage: false,
  }
}

componentDidMount() {
    this.setStateFromLocalStorage();
}

saveStateToLocalStorage = () => {
  for (let key in this.state) {
    localStorage.setItem(key, JSON.stringify(this.state[key]));
  }
}

setStateFromLocalStorage = () => {
  for (let key in this.state) {
    if (localStorage.hasOwnProperty(key)) {
      let value = localStorage.getItem(key);
      try {
        value = JSON.parse(value);
        this.setState({ [key]: value });
      } catch (e) {
        // handle empty string
        this.setState({ [key]: value });
      }
    }
  }
  this.setState({
    advantage: false,
    saveRollAdvantage: false,
    disadvantage: false,
    saveRollDisadvantage: false,
  })
}

clearLocalStorage = () =>{
  localStorage.clear();
  window.location.reload();
}

resetHistory = () =>{
  this.setState({
    history: [{"max": 20, "result": 1, "mod": 0, "diceRolled": 1, "rolledArrayString": "1", "key": Date.now()}],
  })
}

getRandomInt(max) {
  let firstStep = Math.round(Math.random() * (max - 1) + 1);
  return firstStep
}

searchHistory(){
  for (let i=0; i < this.state.history.length; i++) {
      if (this.state.history[i].key === historyID) {
          historyID++;
      }
  }
}

diceRoll = (event, max, diceRolled, mod, advantage, label, disadvantage) => {
  event.preventDefault();
  if (!diceRolled) { diceRolled = this.state.diceRolled;}
  if (!mod) {
    mod = this.state.modifier;
  }
  if (!advantage) { advantage = this.state.advantage }
  if (!disadvantage) { disadvantage = this.state.disadvantage }
  let diceRolledArray = [];
  let roll1;
  let roll2;
  let roll3;
  let roll4;
  let advHistoryArray = [];
    let i = 0;
    while (i < diceRolled) {
      roll1 = this.getRandomInt(max);
      roll2 = this.getRandomInt(max);
        if (advantage){
        if (roll2 > roll1){
          roll3 = roll2;
          roll4 = roll1;
        } else { roll3 = roll1; roll4 = roll2; }
        }
        else if (disadvantage){
          if (roll2 < roll1){
            roll3 = roll2;
            roll4 = roll1;
          } else { roll3 = roll1; roll4 = roll2;  }
          } else {
            roll3 = roll1; roll4 = roll2;
          }
      diceRolledArray.push(roll3);
      advHistoryArray.push(` ${roll3}, ${roll4}`);
      i++;
  }
  let arrayTotal = diceRolledArray.reduce((a,b) => (a + b));
  let result = parseInt(arrayTotal) + parseInt(mod);
  let arrayString = diceRolledArray.join(", ");
  if (mod > -1) {
  toast(<div>{diceRolled}d{max} result: {result}
  <br/>
  ({arrayString} + {mod})<br/>
  { advantage && !disadvantage ? ` Advantage rolls: ${roll3}, ${roll4}` : `` } { advantage && disadvantage ? ` Advantage rolls: ${roll3}, ${roll4}` : `` } { disadvantage && !advantage ? `Disadvantage rolls: ${roll3}, ${roll4}` : `` }
    </div>);
  } else {
    let posMod = Math.abs(mod);
    toast(<div>{diceRolled}d{max} result: {result}
      <br/>
      ({arrayString} - {posMod} )<br/>
      { advantage && !disadvantage ? ` Advantage rolls: ${roll3}, ${roll4}` : `` } { advantage && disadvantage ? ` Advantage rolls: ${roll3}, ${roll4}` : `` } { disadvantage && !advantage ? `Disadvantage rolls: ${roll3}, ${roll4}` : `` }
        </div>);
  }
  let latestRoll = { "max": max, "result": result, "mod": mod, "diceRolled": diceRolled, "rolledArrayString": arrayString };
  if (advantage||disadvantage) { 
  let arrayString = advHistoryArray.join("; ");
    latestRoll.advantageRolls = arrayString;
    if (advantage){latestRoll.advantage = "advantage";}
    if (disadvantage){latestRoll.advantage = "disadvantage";}
  }
  if (label){
    latestRoll.label = label;
  }
  this.searchHistory();
  latestRoll.key = historyID;
  let newHistory = [...this.state.history, latestRoll];
  let newHistory2 = newHistory.sort((a, b) => a.key - b.key);
  this.setState({
    history: newHistory2
  })
  this.scrollToTop();
}

pushDie = () => {
  this.setState({
    dice: [...this.state.dice, 
      { sides: this.state.addDie, diceRolled: this.state.diceRolled, key: uuidv4(), }
    ],
    addDie: 2,
    diceRolled: 1,
  })
}

deleteDie = (event, current) => {
  event.preventDefault();
  let index = this.state.dice.indexOf(current);
  this.state.dice.splice(index, 1);
  this.setState({
    dice: this.state.dice
  })
}

saveRoll = () => {
  this.setState({
    savedRolls: [...this.state.savedRolls, {
      "saveDiceRolled": this.state.saveDiceRolled,
      "sides": this.state.saveRollSides,
      "modifier": this.state.saveRollModifier,
      "advantage": this.state.saveRollAdvantage,
      "disadvantage": this.state.saveRollDisadvantage,
      "label": this.state.saveLabel,
      "key": Date.now(),
    }],
    addDie: 2,
    saveLabel: "",
  })
  //console.log(this.state.savedRolls)
}

deleteRoll = (event, current) => {
  event.preventDefault();
  let index = this.state.savedRolls.indexOf(current);
  this.state.savedRolls.splice(index, 1);
  this.setState({
    savedRolls: this.state.savedRolls
  })
}

renderDice() {
  return this.state.dice.map((current) =>
  <>
  <Table key={current.key}>
  <tbody className="text-center">
      <tr>
      <td><button className="buttons" onClick={(event) => this.diceRoll(event, current.sides, current.diceRolled, )}>{current.diceRolled}d{current.sides}</button></td>
      <td><button className="buttons" onClick={(event) => this.deleteDie(event, current)}>Remove</button></td>
      </tr>
      </tbody>
    </Table>
  </>
  )
}

showHistory() {
  return this.state.history.reverse().map((current) =>
  <>
  <Table key={this.state.history.findIndex(item => item.key === current.key)}>
    <tbody>
  <tr>
  <td>{current.label}</td>
    <td>{current.diceRolled}d{current.max} roll:</td>
    <td>{current.result}</td>
    <td className="wide-td">({current.rolledArrayString} + {current.mod})</td>
    <td className="wide-td">{current.advantage === "advantage" ? `Advantage rolls: ${current.advantageRolls}` : ""} {current.advantage === "disadvantage" ? `Disadvantage rolls: ${current.advantageRolls}` : ""}</td>
  </tr>
  </tbody>
  </Table>
  </>
  )
}


scrollToTop = () => {
  this.historyRef.current.scrollTop = 0;
};


showSavedRolls() {
  return this.state.savedRolls.map((current) =>
  <>
  <Table key={current.key} >
  <tbody className="fixed-width-columns text-center">
<tr>
      <td >{current.label}</td>
      <td ><button  className="buttons" onClick={(event) => this.diceRoll(event, current.sides, current.saveDiceRolled, current.modifier, current.advantage, current.label)}>{current.saveDiceRolled}d{current.sides} + {current.modifier}</button></td>
      <td >{current.advantage ? "Advantage" : <i>       </i>} {current.disadvantage ? "Disadvantage" : <i>       </i>}</td>
      <td><button  className="buttons" onClick={(event) => this.deleteRoll(event, current)}>Remove</button></td>
      </tr>
      </tbody>
      </Table>
  </>
  )
}

handleChange = (event) => {
  const newState = {};
  if (event.target.name === 'advantage'){
    //console.log("trig if, advantage in state is: ", this.state.advantage);
    newState[event.target.name] = !this.state.advantage
    //console.log("after if, advantage in state is: ", this.state.advantage)
}
else if (event.target.name === 'saveRollAdvantage'){
  //console.log("trig if, saveRollAdvantage in state is: ", this.state.saveRollAdvantage);
  newState[event.target.name] = !this.state.saveRollAdvantage
  //console.log("after if, saveRollAdvantage in state is: ", this.state.saveRollAdvantage)
}
else { newState[event.target.name] = event.target.value }
  this.setState(newState)
}

handleSubmit = (event) => {
  event.preventDefault();
  this.setState({
    dice: [...this.state.dice, this.state.addDie]
  })
}

render () {
    return (
    <>
      <Container fluid>
      <ToastContainer />
      <Container>
      <Row>
      <Col xs={4}>

      <Table bordered>
        <thead>
          <tr>
          <th>Dice</th>
          </tr>
          </thead>
        <div className="rolls-container">
        {this.renderDice()}
        </div>
        </Table>

      <Form>
      <label>
      <br/>Modifier: <br/>
          <input type="number" name="modifier" step="1" value={this.state.modifier} onChange={(e) => this.handleChange(e)} />
          <br/>Advantage: <input type="checkbox" name="advantage" value={this.state.advantage} onChange={(e) => this.handleChange(e)} />
          <br/>Disadvantage: <input type="checkbox" name="disadvantage" value={this.state.disadvantage} onChange={(e) => this.handleChange(e)} />
          <hr/>
      <u>Add Custom Die</u>
          <br/>Number of dice to roll: <br/>
          <input type="number" name="diceRolled" step="1" value={this.state.diceRolled} onChange={(e) => this.handleChange(e)} />
          
          <br/>Custom die sides:<br/>
          <input type="number" name="addDie" min="1" step="1" value={this.state.addDie} onChange={(e) => this.handleChange(e)} />
          
        </label>
        <br/>
        <input type="button" onClick={this.pushDie} value="Add Custom Die"/>
        </Form>
        
<br/><br/>
        
      </Col>

      <Col>

      <Table bordered>
        <thead>
          <tr>
          <th>Saved Rolls</th>
          </tr>
          </thead>
        <div className="saved-rolls-container">
        {this.showSavedRolls()}
        </div>
        </Table>
  
      <Form>
        <label>
          <u>Save roll</u>
          <br/>Label:<br/> <input type="text" name="saveLabel" value={this.state.saveLabel} onChange={(e) => this.handleChange(e)} />
          <br/>Number of dice to roll:<br/> <input type="number" name="saveDiceRolled" min="1" step="1" value={this.state.saveDiceRolled} onChange={(e) => this.handleChange(e)} />
          <br/>Die sides:<br/> <input type="number" name="saveRollSides" min="1" step="1" value={this.state.saveRollSides} onChange={(e) => this.handleChange(e)} />
          <br/>Modifier:<br/> <input type="number" name="saveRollModifier" step="1" value={this.state.saveRollModifier} onChange={(e) => this.handleChange(e)} />
          <br/>Advantage: <input type="checkbox" name="saveRollAdvantage" value={this.state.saveRollAdvantage} onChange={(e) => this.handleChange(e)} />
          {this.state.saveRollAdvantage}
          <br/>Disadvantage: <input type="checkbox" name="saveRollDisadvantage" value={this.state.saveRollDisadvantage} onChange={(e) => this.handleChange(e)} />
          {this.state.saveRollDisadvantage}
        </label>

        <br/>
        <input type="button" onClick={this.saveRoll} value="Save Roll"/>
        </Form>
        <br/>
      </Col>
      </Row>

      <Row>
      <Col>
      <Table bordered>
        <thead>
          <tr>
          <th>History</th>
          </tr>
          </thead>
        <div className="history-container" ref={this.historyRef}>
        {this.showHistory()}
        </div>
 
      </Table>
      <Form>
      <label>
          <br/><br/>
        <input type="button" onClick={this.saveStateToLocalStorage} value="Save rolls, dice, and history" />
        <br/>If you save your custom dice, custom rolls, and roll history, they will be here when you come back to this page. Otherwise, you'll start afresh. 
        <br/><br/>
        <input type="button" onClick={this.resetHistory} value="Reset History" />
        <br/>This button resets the roll history to its original state.
        <br/><br/>
        <input type="button" onClick={this.clearLocalStorage} value="Reset to Default" />
        <br/>This button resets your custom dice, custom rolls, and roll history to their original states.
        </label>
        </Form>
 
      </Col>
      </Row>
      </Container>
      </Container>
    </>
  );
}

}
export default App;
