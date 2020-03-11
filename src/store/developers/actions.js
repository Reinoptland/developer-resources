export function addDeveloper(name, url) {
  return {
    type: "ADD_DEVELOPER",
    payload: {
      id: Math.round(Math.random() * 1000000),
      name: name,
      website: url,
      favorites: []
    }
  };
}

export function deleteDeveloper(developerId) {
  return {
    type: "DELETE_DEVELOPER",
    payload: developerId
  };
}
