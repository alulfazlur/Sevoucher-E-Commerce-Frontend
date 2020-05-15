const initialState = {
  gameName: "",
  tile: "",
  banner: "",
  publisher: "",
  description: "",
  category: "",
  gplay: "",
  appstore: "",
  website: "",
  community: "",
  promo: "",
  discount: "",
  gameList:[],
  sortby:"",
  search:""
};

export default function gameReducer(gameState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_GAME":
      return {
        ...gameState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "SUCCESS_REGISTER_GAME":
      return {
        ...gameState,
      };
      case "SUCCESS_GET_GAME_LIST":
      return {
        ...gameState,
        gameList: action.payload
      };
    default:
      return gameState;
  }
}
