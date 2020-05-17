import axios from "axios";

export const changeInputPayment = (e) => {
  return {
    type: "CHANGE_INPUT_PAYMENT",
    payload: e,
  };
};
export const changeInputSort = (e) => {
  return {
    type: "CHANGE_INPUT_SORT",
    payload: e,
  };
};
export const changeInputDelete = (e) => {
  return {
    type: "CHANGE_INPUT_DELETE",
    payload: e,
  };
};
export const addToCart = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      ign: getState().voucher.ign,
      game_name: localStorage.getItem("namaGame"),
      voucher_name: getState().voucher.voucherChosen,
    };
    const myJSON = JSON.stringify(bodyRequest);
    const token = localStorage.getItem("token");
    await axios
      .post("http://0.0.0.0:9000/cart", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        alert(
          `Voucher ${getState().voucher.voucherChosen} ${localStorage.getItem(
            "namaGame"
          )} added to cart`
        );
        dispatch({ type: "SUCCESS_ADD_TO_CART" });
      })
      .catch((error) => {
        alert("Make sure you fill Game ID and choose the voucher")
        console.log(error);
      });
  };
};

export const getCartDetail = (props) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://0.0.0.0:9000/cart/detail", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_CART_DETAIL", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getCartResume = (props) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://0.0.0.0:9000/cart/resume", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_CART", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const getCartHistory = (props) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://0.0.0.0:9000/cart/history", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_CART_HISTORY", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addPayment = (props) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    const bodyRequest = {
      payment: getState().payment.payment,
      operator: getState().payment.operator,
    };
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .put("http://0.0.0.0:9000/cart/payment", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then( () => {
        dispatch({ type: "SUCCESS_PUT_PAYMENT"});
      })
      .catch((error) => {
        alert("Please choose payment method");
        console.log(error);
      });
  };
};

export const doCheckout = (props) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios({
      method: "PUT",
      url: "http://0.0.0.0:9000/cart/checkout",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_CHECKOUT" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteDetail = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios
    ({
      method: "DELETE",
      data: {
        id: getState().payment.trans_id
      },
      url: "http://0.0.0.0:9000/cart/detail",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (response) => {
        alert("Item deleted");
        dispatch({ type: "SUCCESS_DELETE_DETAIL"});
        window.location.reload()
      })
      .catch((error) => {
        alert("Choose the item that will be deleted");
        console.log(error);
      });
  };
};

export const deleteCart = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios
    ({
      method: "DELETE",
      data: {
      },
      url: "http://0.0.0.0:9000/cart",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (response) => {
        alert("Cart deleted");
        dispatch({ type: "SUCCESS_DELETE_CART"});
        window.location.reload()
      })
      .catch((error) => {
        console.log(error);
      });
  };
};