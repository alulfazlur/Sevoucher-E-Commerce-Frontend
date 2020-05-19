import axios from "axios";
const baseUrl = process.env.REACT_APP_PUBLIC_URL

export const getBio = () => {
  let endPoint;
  const tokenUser = localStorage.getItem("token");
  const status = localStorage.getItem("status");

  status === "seller"
    ? (endPoint = "/admin/me")
    : (endPoint = "/user/me");
  return async (dispatch) => {
    await axios({
      method: "GET",
      url: baseUrl + endPoint,
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

export const editBio = () => {
  const tokenUser = localStorage.getItem("token");
  const endPoint = baseUrl + "/user/me";
  return async (dispatch, getState) => {
    const bodyRequest = {
      name: getState().user.fullName,
      email: getState().user.email,
      // avatar: getState().user.avatar,
      address: getState().user.address,
      phone: getState().user.phone,
    };
    await axios({
      method: "PUT",
      url: endPoint,
      headers: { Authorization: `Bearer ${tokenUser}` },
      body: JSON.stringify(bodyRequest),
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

export const doDeleteUser = () => {
  const tokenUser = localStorage.getItem("token");
  const endPoint = baseUrl + "/user/delete";
  return async (dispatch, getState) => {
    await axios.delete(endPoint, {
      headers: {Authorization: `Bearer ${tokenUser}`},
      params: {username : getState().voucher.username}}, {
    })
      .then(async (response) => {
        alert("User deleted")
        dispatch({ type: "SUCCESS_DELETE_USER" });
      })
      .catch((error) => {
        alert("User did not found")
        console.log(error);
      });
  };
};

export const doLogIn = (props) => {
  return async (dispatch, getState) => {
    await axios({
      method: "GET",
      url: baseUrl + "/login",
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
      .post(baseUrl + "/admin", bodyRequest)
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
      .post(baseUrl + "/user", bodyRequest)
      .then(() => {
        dispatch({ type: "SUCCESS_SIGNUP" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const doEditBioBuyer = (props) => {
  const tokenUser = localStorage.getItem("token");
  return async (dispatch, getState) => {
    const bodyRequest = {
      name: getState().user.name,
      email: getState().user.email,
      avatar: getState().user.avatar,
      address: getState().user.address,
      phone: getState().user.phone,
    };
    await axios
      .put(baseUrl + "/user/me", bodyRequest, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${tokenUser}`,
        },
      })
      .then(async() => {
        await dispatch({ type: "SUCCESS_SIGNUP" });
        alert("Your biodata edited!");
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
