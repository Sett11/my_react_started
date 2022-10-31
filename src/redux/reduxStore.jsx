import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import friendsReducer from "./friendsReducer";
import profileReducer from "./profileReduser";
import sideBarReducer from "./sideBarReducer";
import usersReducer from "./usersReducer";

let redusers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    friendsPage: friendsReducer,
});
 let store = legacy_createStore(redusers);

window.store = store

 export default store