import React from 'react';

const RaceSelector = (props) => {

  const options = props.races.map( (race, index) => {
    return <option value={index} key={index}>{race.name}</option>
  })

  function handleChange(event){
    props.onRaceSelected(event.target.value);
  }

  return (
    <select
      defaultValue="default"
      style={{zIndex: `100`, position: `absolute`}}
      name="race-selector"
      id="race-selector"
      onChange={handleChange}
    >
      <option disabled value="default">Choose a race...</option>
      {options}
    </select>
  )
};

export default RaceSelector;
