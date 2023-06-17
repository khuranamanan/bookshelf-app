import React, { useContext } from "react";
import { BooksStatusContext } from "../context/booksStatusContext";
import { ACTION_TYPES } from "../utils/constant";

function BookCard({ bookData }) {
  const { booksData, dispatch } = useContext(BooksStatusContext);

  function handleOptionChange(event) {
    dispatch({
      type: ACTION_TYPES.UPDATE_BOOK_STATUS,
      payload: { bookID: bookData._id, bookStatus: event.target.value },
    });
  }

  const currentBookStatus = booksData.find(
    (book) => book._id === bookData._id
  ).bookStatus;

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-48 flex flex-col">
      <img src={bookData.img} alt={bookData.title} className="w-full mb-4" />
      <div className="grow">
        <h3 className="text-xl font-semibold">{bookData.title}</h3>
        <p className="text-gray-600">{bookData.author}</p>
      </div>

      <div className="mt-4">
        <div className="relative inline-block text-left">
          <select
            value={currentBookStatus}
            onChange={handleOptionChange}
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          >
            <option value="READING">Currently Reading</option>
            <option value="WANT_TO_READ">Want to Read</option>
            <option value="READ">Read</option>
            <option value="NONE">None</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
