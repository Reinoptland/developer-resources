// Parameterized Selector
export function selectDeveloperById(developerId) {
  return function(reduxState) {
    // console.log("ID OF DEV", developerId);
    // console.log(
    //   "STATE OF STORE",
    //   reduxState.developers.find(developer => developer.id === developerId)
    // );
    // how are we going to get the correct developer from this array?
    // filter -> array -> smaller array
    // find -> array -> one item
    // map, filter, find, forEach, includes (only works with strings, numbers)
    return reduxState.developers.find(
      developer => developer.id === developerId
    );
  };
}

function average(numbers) {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}

export function selectAllDevelopers(reduxState) {
  // console.log("STATE IN SELECTOR", reduxState.developers);
  return reduxState.developers;
}

export const selectDeveloperStatistics = state => {
  return {
    num: state.developers.length,
    numWithWebsite: state.developers.filter(dev => !!dev.website).length,
    numWithoutFavorites: state.developers.filter(
      dev => dev.favorites.length === 0
    ).length,
    avgNumberOfFavorites: average(
      state.developers.map(dev => dev.favorites.length)
    )
  };
};

export function selectDevelopersWithFavorite(favoriteId) {
  return function(state) {
    return state.developers.filter(dev => dev.favorites.includes(favoriteId));
  };
}
