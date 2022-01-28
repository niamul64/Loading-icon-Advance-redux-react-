import * as actionType from "./actionType";
import DISHES from "../data/Dishes";
export const addCommentActionOBJ = (dishId, rating, author, comment) => ({ // action obj
      // no need return // arrow function will return after '=>'
      type: actionType.ADD_COMMENT,
      payload: {
            dishId: dishId,
            rating: rating,
            author: author,
            comment: comment
      }
})

export const loadDishes = (dishes) => ({
      type: actionType.LOAD_DISHES,
      payload: {
            dishes
      }
})

export const dishesLoading = () => (
      {
            type: actionType.DISHES_LOADING,

      }
)
export const fetchDishes = () => {
      return dispatch => {
            dispatch(dishesLoading());
            setTimeout(() => {
                  dispatch(loadDishes(DISHES))
            },
                  2000);

      }
}