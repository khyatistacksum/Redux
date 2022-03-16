import { createStore } from "redux";
import birdApp from "./Reducer/RootReducer";

const store = createStore(birdApp);

export default store;
