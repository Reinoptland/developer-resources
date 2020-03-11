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

export function fetchResourcesSuccess(resources) {
  return {
    type: "RESOURCES_FETCHED",
    payload: resources
  }
}

export function deleteResource(resourceId) {
  return {
    type: "DELETE_RESOURCE",
    payload: resourceId
  };
}
