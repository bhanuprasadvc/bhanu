import {
    formatError,
    login,
    runLogoutTimer,
    saveTokenInLocalStorage,
    signUp,
} from '../../services/AuthService';


export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOADING_TOGGLE_ACTION = '[Loading action] toggle loading';
export const LOGOUT_ACTION = '[Logout action] logout action';

export function signupAction(email, password, history) {
    return (dispatch) => {
        signUp(email, password)
            .then((response) => {
                saveTokenInLocalStorage(response.data);
                runLogoutTimer(
                    dispatch,
                    response.data.expiresIn * 1000,
                    history,
                );
                dispatch(confirmedSignupAction(response.data));
                history.push('/dashboard');
            })
            .catch((error) => {
                const errorMessage = formatError(error.response.data);
                dispatch(signupFailedAction(errorMessage));
            });
    };
}


export function logout(history) {
    localStorage.removeItem("userDetails");
    history.push("/login");
    return {
      type: LOGOUT_ACTION,
    };
  }

  export function loginAction(email, password, history) {
    return (dispatch) => {
        fetch('https:freshmentmodules.governmentjobsforgraduates.com/api/freshment_portal_apis/College/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                'college_email': email,
                'college_password': password
            }),
        })
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    //alert("You r logged in");
                    saveTokenInLocalStorage(result);
                    runLogoutTimer(
                        dispatch,
                        result.expiresIn * 1000,
                        history,
                    );
                    dispatch(loginConfirmedAction(result));
                    history.push("/dashboard");
                    // this.goToMain();
                } else {
                    alert("Please check your login information.");
                }
            });
        // login(email, password)
        // // .then((response) => response.json())
        //     .then((response) => {
        //         saveTokenInLocalStorage(response.data);
        //         runLogoutTimer(
        //             dispatch,
        //             response.data.expiresIn * 1000,
        //             history,
        //         );
        //         dispatch(loginConfirmedAction(response.data));
        //         // console.log(response);
        // 		history.push('/dashboard');                
        //     })
        //     .catch((error) => {
        // 		//console.log(error);
        //         const errorMessage = formatError(error.response.data);
        //         dispatch(loginFailedAction(errorMessage));
        //     });

    };
}

export function loginFailedAction(data) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: data,
    };
}

export function loginConfirmedAction(data) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: data,
    };
}

export function confirmedSignupAction(payload) {
    return {
        type: SIGNUP_CONFIRMED_ACTION,
        payload,
    };
}

export function signupFailedAction(message) {
    return {
        type: SIGNUP_FAILED_ACTION,
        payload: message,
    };
}

export function loadingToggleAction(status) {
    return {
        type: LOADING_TOGGLE_ACTION,
        payload: status,
    };
}