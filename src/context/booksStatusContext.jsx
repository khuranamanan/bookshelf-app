import { createContext, useReducer } from "react";
import {
  booksStatusReducer,
  initialState,
} from "../reducer/booksStatusReducer";

export const BooksStatusContext = createContext();

export function BooksStatusProvider({ children }) {
  const [state, dispatch] = useReducer(booksStatusReducer, initialState);

  const searchFilteredBooks = state.searchKey
    ? state.booksData.filter(
        ({ title, author }) =>
          title.toLowerCase().indexOf(state.searchKey.toLowerCase()) !== -1 ||
          author.toLowerCase().indexOf(state.searchKey.toLowerCase()) !== -1
      )
    : [];

  return (
    <BooksStatusContext.Provider
      value={{
        booksData: state.booksData,
        searchKey: state.searchKey,
        dispatch,
        searchFilteredBooks,
      }}
    >
      {children}
    </BooksStatusContext.Provider>
  );
}
