import React from 'react';
import RaceSelector from '../components/RaceSelector';
import RaceDetail from '../components/RaceDetail';
import MyMapComponent from '../components/MyMapComponent';
import SideBar from '../components/SideBar';
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
      this.setState({races: data});
  }

  handleRaceSelected(index){
    const selectedRace = this.state.races[index];
    this.setState({currentRace: selectedRace});
  }


  render(){
    return (
      <div id="wrapper">
        <div id="sidebar"></div>
        <RaceSelector
          races={this.state.races}
          onRaceSelected={this.handleRaceSelected}
        />
        <RaceDetail race={this.state.currentRace}/>
        <MyMapComponent id="map" />
        {/* <SideBar /> */}
      </div>
    );
  }
}

export default MainContainer;
