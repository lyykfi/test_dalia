/**
 * Init state for a user account.
 */
const initState = {
    surveyList: null,
}

/**
 * Surveys reducer.
 */
function surveys(state = initState, action) {
  switch (action.type) {
    case AUTH_USER_RECEIVED:
      Cookies.set("token", action.token);
      return Object.assign({}, state, {token: action.token});
    case LOGOUT_USER:
      Cookies.remove("token");
      return Object.assign({}, state, {token: null});
    default:
      return state
  }
}

export default account;