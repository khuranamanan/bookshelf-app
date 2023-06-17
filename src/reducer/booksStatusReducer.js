import { booksDB } from "../data/booksData";
import { ACTION_TYPES } from "../utils/constant";

export const initialState = {
  booksData: booksDB,
  searchKey: "",
};

export function booksStatusReducer(state, action) {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_BOOK_STATUS: {
      return {
        ...state,
        booksData: state.booksData.map((book) =>
          book._id === action.payload.bookID
            ? { ...book, bookStatus: action.payload.bookStatus }
            : book
        ),
      };
    }

    case ACTION_TYPES.CHANGE_SEARCH_KEY: {
      return { ...state, searchKey: action.payload };
    }

    default:
      return state;
  }
}
