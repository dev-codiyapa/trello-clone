import { createStore, Store } from "redux";
import rootReducers from "../AllReducers";

const store: Store<any> = createStore(rootReducers);

export default store;
