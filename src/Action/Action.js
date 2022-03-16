const ADD_BIRD = "ADD_BIRD";
const INCREMENT_BIRD = 'INCREMENT_BIRD';

export function addBird(bird) {
  return {
    type: ADD_BIRD,
    bird,
  };
}

export function incrementBird(bird) {
  return {
    type: INCREMENT_BIRD,
    bird,
  };
}
