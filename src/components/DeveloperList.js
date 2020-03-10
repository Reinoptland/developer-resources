import React from "react";
import { useSelector } from "react-redux";
import {
  selectDevelopers,
  selectDevelopersWithFavorite
} from "../store/developers/selectors";

// What do I need to import to take state from redux and
// put it into my App component?
// - useSelector (from react redux)
// - selector function store/developers/selectors

export default function DeveloperList() {
  const developersWithThisFavorite = useSelector(
    selectDevelopersWithFavorite(2)
  );

  //   console.log(developersWithThisFavorite);

  const developers = useSelector(selectDevelopers);

  return (
    <div>
      {developers.map(developer => (
        <div key={developer.id}>
          <h2>{developer.name}</h2>
        </div>
      ))}
    </div>
  );
}
