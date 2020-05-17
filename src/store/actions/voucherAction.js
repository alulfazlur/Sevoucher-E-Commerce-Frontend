import axios from "axios";

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
      .post("http://0.0.0.0:9000/admin/game/voucher", myJSON, {
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
      .put("http://0.0.0.0:9000/admin/game/voucher", myJSON, {
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
      .delete("http://0.0.0.0:9000/admin/game/voucher", {
        headers: {Authorization: `Bearer ${token}`},
        params: {name : getState().game.gameNameDel,
        vocuher: getState().game.voucherNameDel }}, {
      })
      .then(async (response) => {
        alert(`Voucher ${getState().voucher.voucherNameDel} in ${getState().voucher.gameNameDel} is deleted`)
        dispatch({ type: "SUCCESS_REGISTER_VOUCHER" });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// ==============================================/CRUD==================================================

export const getVouchersGame = (props) => {
  return async (dispatch, getState) => {
    await axios
      .get("http://0.0.0.0:9000/public/game/voucher", {
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