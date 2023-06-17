import React, { useContext } from "react";
import { BooksStatusContext } from "../context/booksStatusContext";
import BookShelfSection from "../components/BookShelfSection";

function ShelfPage() {
  const { booksData } = useContext(BooksStatusContext);

  return (
    <div>
      <BookShelfSection
        booksData={booksData}
        heading={"Reading"}
        status={"READING"}
      />
      <BookShelfSection
        booksData={booksData}
        heading={"Want To Read"}
        status={"WANT_TO_READ"}
      />
      <BookShelfSection
        booksData={booksData}
        heading={"Read"}
        status={"READ"}
      />
    </div>
  );
}

export default ShelfPage;
