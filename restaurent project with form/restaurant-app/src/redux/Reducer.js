
import Comments from "../data/Comments";
import { combineReducers } from 'redux'
import * as actionType from "./actionType";

const dishReducer = (dishState = { isLoading: true, dishes: [] }, action) => {
      switch (action.type) {
            case actionType.DISHES_LOADING:
                  return {
                        ...dishState,
                        isLoading: true,
                        dishes: []
                  }
            case actionType.LOAD_DISHES:
                  return {
                        ...dishState,
                        isLoading: false,
                        dishes: action.payload
                  }

            default:
                  return dishState;
      }
}

const commnetReducer = (commnetState = Comments, action) => {
      switch (action.type) {
            case actionType.ADD_COMMENT:
                  let comment = action.payload;
                  comment.id = commnetState.length;
                  comment.date = new Date().toDateString();

                  //console.log(comment);
                  return commnetState.concat(comment)

            default:
                  return commnetState;
      }



}

const Reducer = combineReducers({
      dishes: dishReducer,
      comments: commnetReducer
})
export default Reducer;