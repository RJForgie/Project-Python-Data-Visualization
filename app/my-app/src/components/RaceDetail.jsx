import React from 'react';

const RaceDetail = (props) => {

  if (!props.race) return null
  return (
    <div>
    <p>{props.race.name}</p>
    <p>{props.race.date}</p>
    <p>{props.race.venue}</p>
    <p>{props.race.distance}</p>
    <p>{props.race.climb}</p>
  </div>
  )
}

export default RaceDetail;
