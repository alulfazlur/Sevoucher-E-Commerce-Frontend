import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducers/userReducer";
import gameReducer from "./reducers/gameReducer";
import voucherReducer from "./reducers/voucherReducer";
import paymentReducer from "./reducers/paymentReducer";

const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
  voucher : voucherReducer,
  payment : paymentReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => console.warn("cek state store", store.getState()));

export default store;
