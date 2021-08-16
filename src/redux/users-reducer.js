const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSERS = "SETUSERS";

let initialState = {
    users: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usedId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.usedId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SETUSERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }
}
export const followAC = (usedId) => ({type: FOLLOW, usedId});
export const unfollowAC = (usedId) => ({type: UNFOLLOW, usedId});
export const setUsersAC = (users) => ({type: SETUSERS, users});
export default usersReducer;