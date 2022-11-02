const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
  users: [
    // {
    //   id: 1,
    //   photoUrl:'data:image/jpeg;base64,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',
    //   followed: true,
    //   fullName: 'Vasia',
    //   status: 'i am a boss',
    //   location: { sity: 'Minsk', country: 'Belarus' },
    // },
    // {
    //   id: 2,
    //   photoUrl:'data:image/jpeg;base64,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',
    //   followed: true,
    //   fullName: 'Petya',
    //   status: 'i am a fack',
    //   location: { sity: 'Moskow', country: 'Russia' },
    // },
    // {
    //   id: 3,
    //   photoUrl:'data:image/jpeg;base64,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',
    //   followed: false,
    //   fullName: 'Fedya',
    //   status: 'i am a durak',
    //   location: { sity: 'Gomel', country: 'Belarus' },
    // },
    // {
    //   id: 4,
    //   photoUrl:'data:image/jpeg;base64,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',
    //   followed: false,
    //   fullName: 'Durak',
    //   status: 'i am a idiot',
    //   location: { sity: 'Voronej', country: 'Russia' },
    // },
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      {
        return { ...state, currentPage: action.currentPage};
      }
      case SET_TOTAL_USERS_COUNT:
      {
        return { ...state, totalUsersCount: action.count};
      }
      case TOGGLE_IS_FETCHING:
      {
        return { ...state, isFetching: action.isFetching};
      }
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS: {
      return { ...state, users: [ ...action.users] };
    }

    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unFollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage)=> ({type: SET_CURRENT_PAGE, currentPage:currentPage});
export const setTotalUsersCount = (totalUsersCount)=> ({type: SET_TOTAL_USERS_COUNT, count:totalUsersCount});
export const setToggleFetching = (isFetching)=> ({type: TOGGLE_IS_FETCHING, count:isFetching});

export default usersReducer;
