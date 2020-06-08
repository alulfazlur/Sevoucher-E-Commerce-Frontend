import axios from "axios";
const baseUrl = "https://sevoucher-be.fazlurtech.my.id"

// ==============================================CRUD==================================================

export const doRegisterVoucher = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      name: getState().voucher.gameVoucherName,
      voucher: getState().voucher.voucherName,
      price: getState().voucher.voucherPrice,
    };
    const myJSON = JSON.stringify(bodyRequest);
    console.warn("myJSON Body Req", myJSON)
    const token = localStorage.getItem("token");
    await axios
      .post(baseUrl + "/admin/game/voucher", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        alert(`Voucher ${getState().voucher.voucherName} in ${getState().voucher.gameVoucherName} is registered`)
        dispatch({ type: "SUCCESS_REGISTER_VOUCHER" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const doEditVoucher = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      gameName: getState().voucher.gameVoucherName,
      voucher: getState().voucher.voucherName,
      newVoucher: getState().voucher.newVoucherName,
      price: getState().voucher.voucherPrice,
    };
    const myJSON = JSON.stringify(bodyRequest);
    console.warn("myJSON Body Req", myJSON)
    const token = localStorage.getItem("token");
    await axios
      .put(baseUrl + "/admin/game/voucher", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        alert(`Voucher ${getState().voucher.voucherName} in ${getState().voucher.gameVoucherName} is edited`)
        dispatch({ type: "SUCCESS_REGISTER_VOUCHER" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteVoucher = (props) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    await axios
      .delete(baseUrl + "/admin/game/voucher", {
        headers: {Authorization: `Bearer ${token}`},
        params: {gameName : getState().voucher.gameNameDel,
        voucher: getState().voucher.voucherNameDel }}, {
      })
      .then(async (response) => {
        alert(`Voucher ${getState().voucher.voucherNameDel} in ${getState().voucher.gameNameDel} is deleted`)
        dispatch({ type: "SUCCESS_REGISTER_VOUCHER" });
      })
      .catch((error) => {
        alert(`Voucher ${getState().voucher.voucherNameDel} did not found`)
        console.log(error);
      });
  };
};

// ==============================================/CRUD==================================================

export const getVouchersGame = (props) => {
  return async (dispatch, getState) => {
    await axios
      .get(baseUrl + "/public/game/voucher", {
        params: {gameName : localStorage.getItem(("namaGame"))}
      })
      .then(async(response) => {
        dispatch({ type: "SUCCESS_GET_VOUCHER_GAME", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const changeInputVoucher = (e) => {
    return {
      type: "CHANGE_INPUT_VOUCHER",
      payload: e,
    };
  };