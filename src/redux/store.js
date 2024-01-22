import {toggle_reducer} from "./reducer";
import { createStore } from "redux";
const store = createStore(toggle_reducer);

export default store;