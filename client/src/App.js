import React, { Component } from 'react';
import './App.css';
import fighters from "./fighters.json";
import FightCard from "./components/FightCard";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import Title from "./components/Title";

class App extends Component {

  state = {
    fighters, count: 0
  };

  // Array for fighters clicked
  clicked = []

  // Function to push clicked fighters to a new array
  storeClicked = () => {

  }

  // handleIncrement increments this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  handleClick = id => {
    console.log("Image Clicked")
    fighters.sort(function (a, b) { return 0.5 - Math.random() });
    // Set this.state.friends equal to the new friends array
    this.handleIncrement();
    this.setState({ fighters });
  };

  render() {
    return (
      <div className="App">
        <Title />
        <Counter count={this.state.count}/>
        <div className="container">
          <Wrapper>
            {this.state.fighters.map(fighter => (
              <FightCard
                id={fighter.id}
                key={fighter.id}
                name={fighter.name}
                image={fighter.image}
                handleClick={this.handleClick}
              />
            ))}
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default App;
