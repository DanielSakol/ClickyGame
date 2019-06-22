//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import BandCard from "./components/BandCard";
import Footer from "./components/Footer";
import bands from "./bands.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    bands,
    clickedBands: [],
    score: 0
  };

//when you click on a card ... the bands is taken out of the array
  imageClick = event => {
    const currentBands = event.target.alt;
    const bandsAlreadyClicked =
      this.state.clickedBands.indexOf(currentBands) > -1;

//if you click on a bands that has already been selected, the game is reset and cards reordered
    if (bandsAlreadyClicked) {
      this.setState({
        bands: this.state.bands.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedBands: [],
        score: 0
      });
        alert("Going Blank Again? You chose the same band twice! Play Again?");

//if you click on an available bands, your score is increased and cards reordered
    } else {
      this.setState(
        {
          bands: this.state.bands.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedBands: this.state.clickedBands.concat(
            currentBands
          ),
          score: this.state.score + 1
        },
//if you get all 12 bands corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              bands: this.state.bands.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedBands: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.bands.map(bands => (
            <BandCard
              imageClick={this.imageClick}
              id={bands.id}
              key={bands.id}
              image={bands.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
