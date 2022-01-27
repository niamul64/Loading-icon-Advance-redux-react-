import * as actionType from "./actionType";

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