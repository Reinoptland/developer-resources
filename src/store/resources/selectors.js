export function selectAllResources(reduxState) {
  console.log("STATE IN SELECTOR", reduxState);
  // TODO: return a piece of the state
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
