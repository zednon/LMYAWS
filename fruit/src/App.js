import React, { Component } from 'react';
import './App.css';
import photo1 from './images/dragonfruit.jpg'
import photo2 from './images/papaya.jpg'
import photo3 from './images/Passion Fruit.jpg'
import photo4 from './images/peach.jpg'


const fruit = [
  {
    id: 1,
    photo: photo1,
    clicked: false
    


  },
  {
    id: 2,
    photo: photo2,
    clicked: false
  },
  {
    id: 3,
    photo: photo3,
    clicked: false
  },
  {
    id: 4,
    photo: photo4,
    clicked: false
  },
]

class App extends Component {
  // state = {
  //   message: 'Click Any Image to Begin',
  //   score: 0,
  //   HighScore: 0
  // }

  render() {
return (
  <div className="App">

  <div id="header">
  <div>Word Guessing Game</div>
  {/* <div>{this.state.message}</div>
<div>Score: {this.state.score} Top Score: {this.state.HighScore}</div> */}
</div>
</div>
)
}
  
}

export default App;
