import React from "react";
import BookCard from "./bookCard";

function BookShelfSection({ heading, status, booksData }) {
  const filteredBooks = booksData.filter((book) => book.bookStatus === status);

  const bookListMapped = filteredBooks.length ? (
    filteredBooks.map((book) => (
      <React.Fragment key={book._id}>
        <BookCard bookData={book} />
      </React.Fragment>
    ))
  ) : (
    <p className="text-black">{`No books in ${heading} shelf`}</p>
  );

  return (
    <section className="p-4 flex flex-col gap-4 mb-4 items-center">
      <h2 className="text-2xl  uppercase font-bold rounded-lg bg-blue-500 text-white px-3 py-2">
        {heading}
      </h2>
      <hr className="w-full" />
      <span className=" flex flex-wrap gap-4 justify-center">
        {bookListMapped}
      </span>
    </section>
  );
}

export default BookShelfSection;
