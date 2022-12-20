import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  DISPLAY_ALERT,
  CLEAR_ALERT,
} from "./Action";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all the values",
    };
  }

  if (action.type == CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertText: "",
      alertType: "",
    };
  }
  if (action.type == REGISTER_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type == REGISTER_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token:action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'User Created! Redirecting....'

    };
  }
  if (action.type == REGISTER_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert:true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }


  if (action.type == LOGIN_USER_BEGIN) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type == LOGIN_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      token:action.payload.token,
      user: action.payload.user,
      userLocation: action.payload.location,
      jobLocation: action.payload.location,
      showAlert: true,
      alertType: 'success',
      alertText: 'Login Successful! Redirecting....'

    };
  }
  if (action.type == LOGIN_USER_ERROR) {
    return {
      ...state,
      isLoading: false,
      showAlert:true,
      alertType: 'danger',
      alertText: action.payload.msg,
    };
  }

  throw new Error(`no such action: ${action.type}`);
};

export default reducer;
