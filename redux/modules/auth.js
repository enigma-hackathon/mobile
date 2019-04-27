// Constants
const AUTH_SUCCESS = 'daycation/auth/AUTH_SUCCESS';
const AUTH_FAIL = 'daycation/auth/AUTH_FAIL';
const AUTH_LOGOUT = 'daycation/auth/AUTH_LOGOUT';
const USER_UPDATED = 'daycation/auth/USER_UPDATED';

const INITIAL_STATE = { currentUser: {}, authMessage: '' };

// Action Creators
export function authSuccess(authData) {
  return {
    type: AUTH_SUCCESS,
    payload: authData,
  }
}

export function authFail(message) {
  return {
    type: AUTH_FAIL,
    payload: message,
  }
}

export function authLogout() {
  return {
    type: AUTH_LOGOUT,
  }
}

export function updatedUser(updates) {
  return {
    type: USER_UPDATED,
    payload: updates,
  }
}

// Reducer
export default (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.user,
      }
    case AUTH_FAIL:
      return {
        ...state,
        authMessage: message,
      }
    case AUTH_LOGOUT:
      return {
        ...state,
      }
    case USER_UPDATED:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...action.payload,
        }
      }
    default:
      return state
  }
}