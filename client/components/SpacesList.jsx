import React, { useEffect } from 'react';

const SpacesList = (props) => {
  const [currSpace, setSpaces] = useState([])
  useEffect(() => {
    fetch('/spaces/fetchSpaces')
    .then((spaces) => spaces.json())
    .then((data) => {
      const spacesArray = [];
      data.map((x => spacesArray.push(x)));
  });
}, [])

const createData = (id, namespace, teamId, project) => {
  return { id, namespace, teamId, project }
}

const rows = currSpace.map((space) => {
  createData(space._id, space.name, space.team_id, space.project)
});

  return (
    <div id='spaces-list'>
    </div>
  )
}

export default SpacesList;
