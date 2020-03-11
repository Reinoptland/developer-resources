export function selectResourceById(resourceId) {
  return function(reduxState) {
    // console.log("Resource ID", resourceId);
    // console.log(
    //   "STATE",
    //   reduxState.resources.find(resource => resource.id === resourceId)
    // );
    // we need 1 resource
    // map, filter, find, includes
    return reduxState.resources.find(resource => resource.id === resourceId);
  };
}

export function selectAllResources(reduxState) {
  // console.log("STATE IN SELECTOR", reduxState.resources);
  // TODO: return a piece of the state
  return reduxState.resources;
}

// TODO
// write a selector that has a tag as an input
// and it selects all resources that include that tag

export function selectResourcesWithTag(tag) {
  return function(reduxState) {
    // console.log("WHAT IS TAG IN MY SELECTOR", tag);
    // console.log("WHAT IS REDUXSTATE IN MY SELECTOR", reduxState.resources);
    return reduxState.resources.filter(resource => resource.tags.includes(tag));
  };
}

export function resourcesTags(reduxState) {
  return [...new Set(reduxState.resources.flatMap(resource => resource.tags))];
}
