import React from 'react';

const arrayOfSpaces = ["hi", "test", "okay"];
// refresh list of currently active spaces - either by querying db or by running terminal
// commands to get info from kiosk

const listOfSpaces = arrayOfSpaces.map((space) =>
  <li>{space}</li>
);

const SpacesList = () => {
  return (
    <ul>{listOfSpaces}</ul>
  )
}


export default SpacesList;