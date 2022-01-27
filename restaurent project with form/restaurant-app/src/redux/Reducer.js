import DISHES from "../data/Dishes";
import Comments from "../data/Comments";
import { combineReducers } from 'redux'
import * as actionType from "./actionType";

const dishReducer = (dishState = DISHES, action) => {
      switch (action.type) {

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