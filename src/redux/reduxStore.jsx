import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReduser";
import sideBarReducer from "./sideBarReducer";


let redusers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
});
 let store = legacy_createStore(redusers);

window.store = store

 export default store