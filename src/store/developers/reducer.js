const initialState = [
  {
    id: 1,
    name: "Kelley",
    website: "https://hi-im-kelley.netlify.com",
    favorites: [2, 3, 4, 5]
  },
  {
    id: 2,
    name: "Danny",
    website: null,
    favorites: [1, 3, 6]
  },
  {
    id: 3,
    name: "Irene",
    website: null,
    favorites: [1, 2, 3, 6]
  }
];

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
