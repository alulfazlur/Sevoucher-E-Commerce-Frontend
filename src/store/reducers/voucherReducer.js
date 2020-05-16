const initialState = {
  voucherGame:[],
};
  
  export default function voucherReducer(voucherState = initialState, action) {
    switch (action.type) {
      case "CHANGE_INPUT_VOUCHER":
        return {
          ...voucherState,
          [action.payload.target.name]: action.payload.target.value,

        };
      case "SUCCESS_REGISTER_VOUCHER":
        return {
          ...voucherState,
        };
        case "SUCCESS_GET_VOUCHER_GAME":
        return {
          ...voucherState,
          voucherGame: action.payload
        };
      default:
        return voucherState;
    }
  }