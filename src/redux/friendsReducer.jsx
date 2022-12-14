
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
  ]
};

const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }

    default:
      return state;
  }
};


export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default friendsReducer;
