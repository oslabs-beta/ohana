import React from 'react';

const arrayOfSpaces = [];
// refresh list of currently active spaces - either by querying db or by running terminal
// commands to get info from kiosk

const listOfSpaces = arrayOfSpaces.map((space) =>
    <li>{space}</li>
);

const SpacesList = () => {
    <ul>{listOfSpaces}</ul>
}


export default SpacesList;