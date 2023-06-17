import React from "react";
import { useNavigate } from "react-router";
import { GoBackIcon } from "../assets/icons";
import { useContext } from "react";
import { BooksStatusContext } from "../context/booksStatusContext";
import { ACTION_TYPES } from "../utils/constant";
import BookCard from "../components/BookCard";

function SearchPage() {
  const navigate = useNavigate();
  const { searchKey, dispatch, searchFilteredBooks } =
    useContext(BooksStatusContext);

  function handleSearchTextChange(event) {
    dispatch({
      type: ACTION_TYPES.CHANGE_SEARCH_KEY,
      payload: event.target.value,
    });
  }

  let searchDisplayBooks;

  if (searchKey.length === 0) {
    searchDisplayBooks = <p>Type to search</p>;
  } else if (searchKey.length !== 0 && searchFilteredBooks.length === 0) {
    searchDisplayBooks = <p>No books found</p>;
  } else {
    searchDisplayBooks = searchFilteredBooks.map((book) => (
      <React.Fragment key={book._id}>
        <BookCard bookData={book} />
      </React.Fragment>
    ));
  }

  return (
    <div className="p-4 flex flex-col gap-4 w-full items-center">
      <button
        className="flex gap-2 justify-center px-4 py-2 bg-blue-100 rounded-lg w-fit text-sm self-start hover:bg-blue-200"
        onClick={() => navigate("/")}
      >
        <GoBackIcon />
        Go back
      </button>
      <input
        type="text"
        value={searchKey}
        onChange={handleSearchTextChange}
        placeholder="Search Books"
        className="border border-gray-500 border-solid rounded-lg p-2 w-full md:w-[50%]"
      />

      <span className=" flex flex-wrap gap-4 justify-center">
        {searchDisplayBooks}
      </span>
    </div>
  );
}

export default SearchPage;
