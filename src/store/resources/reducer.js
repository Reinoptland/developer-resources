const initialState = [
  {
    id: 1,
    name: "React",
    type: "library",
    tags: ["ui", "jsx", "virtual-dom", "components", "popular"],
    url: "https://reactjs.org"
  },
  {
    id: 2,
    name: "Alpine",
    type: "library",
    tags: ["ui", "vanilla-js", "new"],
    url: "https://github.com/alpinejs/alpine"
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
