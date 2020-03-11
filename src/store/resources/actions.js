// ACTION CREATOR
export function addResource(name, type, url, tags) {
  return {
    type: "ADD_RESOURCE",
    payload: {
      id: Math.round(Math.random() * 10000000),
      name: name,
      type: type,
      url: url,
      tags: tags.split(",")
    }
  };
}
