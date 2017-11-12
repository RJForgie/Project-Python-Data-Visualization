import React from 'react';
import RaceSelector from '../components/RaceSelector';
import RaceDetail from '../components/RaceDetail';
import data from '../data/races.json';

class MainContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      races: [],
      currentRace: null
    };
    this.handleRaceSelected = this.handleRaceSelected.bind(this);
  }

  componentDidMount(){
      // const raceData = JSON.parse(data);
      console.log(data)
      this.setState({races: data});
  }

  handleRaceSelected(index){
    const selectedRace = this.state.races[index];
    this.setState({currentRace: selectedRace});
  }


  render(){
    return (
      <div>
        <h2>Race Container</h2>
        <RaceSelector
          races={this.state.races}
          onRaceSelected={this.handleRaceSelected}
        />
        <RaceDetail race={this.state.currentRace}/>
      </div>
    );
  }
}

export default MainContainer;
