//import (legacy_createStore as createstore)
import { legacy_createStore } from "redux";
import counterReducer from "./reducer"
const store=legacy_createStore()

export default store;