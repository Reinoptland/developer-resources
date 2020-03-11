const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case "RESOURCES_FETCHED":
      return [...state, ...action.payload];
    case "DELETE_RESOURCE":
      return state.filter(resource => resource.id !== action.payload);
    case "ADD_RESOURCE":
      return [...state, action.payload];
    default:
      return state;
  }
}
