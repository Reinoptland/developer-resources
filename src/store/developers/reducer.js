const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case "DELETE_DEVELOPER":
      // console.log(state, action.payload, typeof action.payload);
      return state.filter(developer => developer.id !== action.payload);
    case "ADD_DEVELOPER":
      return [...state, action.payload];
    default:
      return state;
  }
}
