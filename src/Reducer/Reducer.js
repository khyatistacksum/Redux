const ADD_BIRD = "ADD_BIRD";
const INCREMENT_BIRD = "INCREMENT_BIRD";

const defaultBirds = [
  {
    name: "robin",
    views: 1,
  },
];

function birds(state = defaultBirds, action) {
  switch (action.type) {
    case ADD_BIRD:
      return [
        ...state,
        {
          name: action.bird,
          views: 1,
        },
      ];
    case INCREMENT_BIRD:
      const bird = state.find((b) => action.bird === b.name);
      // console.log("bird in INCREMENT_BIRD:- ", bird);
      const birds = state.filter((b) => action.bird !== b.name);
      // console.log("birds after filtering:- ", birds);
      return [
        ...birds,
        {
          ...bird,
          views: bird.views + 1,
        },
      ];
    default:
      return state;
  }
}

export default birds;
