import { combineReducers } from "redux";
import birds from "./Reducer"

const birdApp = combineReducers({
  birds,
});

export default birdApp;
