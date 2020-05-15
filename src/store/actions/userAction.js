import axios from "axios";

export const getBio = () => {
  let endPoint;
  let tokenUser = localStorage.getItem("token");
  let status = localStorage.getItem("status");

  status === "seller"
    ? (endPoint = "http://0.0.0.0:9000/admin/me")
    : (endPoint = "http://0.0.0.0:9000/user/me");
  return async (dispatch) => {
    await axios({
      method: "GET",
      url: endPoint,
      headers: { Authorization: `Bearer ${tokenUser}` },
    })
      .then(async (response) => {
        localStorage.setItem("status", response.data.status);

        dispatch({ type: "SUCCESS_GET_BIO", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const doLogIn = (props) => {
  return async (dispatch, getState) => {
    await axios({
      method: "GET",
      url: "http://0.0.0.0:9000/login",
      params: {
        username: getState().user.userName,
        password: getState().user.passWord,
      },
    })
      .then(async (response) => {
        if (response.data.hasOwnProperty("token")) {
          // console.warn(response.data);
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("status", response.data.status);
          localStorage.setItem("login_status", true);
        }
      })
      .catch(() => {
        alert("Password atau Username anda salah. Coba lagi :) ");
      });
  };
};
export const doSignUpSeller = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      username: getState().user.userName,
      password: getState().user.passWord,
      name: getState().user.fullName,
      email: getState().user.email,
      avatar: getState().user.avatar,
      address: getState().user.address,
      phone: getState().user.phone,
    };
    axios
      .post("http://0.0.0.0:9000/admin", bodyRequest)
      .then(() => {
        dispatch({ type: "SUCCESS_SIGNUP" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const doSignUpBuyer = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      username: getState().user.userName,
      password: getState().user.passWord,
      name: getState().user.name,
      email: getState().user.email,
      // avatar: getState().user.avatar,
      address: getState().user.address,
      phone: getState().user.phone,
    };
    axios
      .post("http://0.0.0.0:9000/user", bodyRequest)
      .then(() => {
        dispatch({ type: "SUCCESS_SIGNUP" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const changeInputUser = (e) => {
  return {
    type: "CHANGE_INPUT_USER",
    payload: e,
  };
};

export const doLogOut = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("login_status");
  localStorage.removeItem("status");

  return {
    type: "SUCCESS_LOGOUT",
  };
};
