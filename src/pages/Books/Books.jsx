import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl">Books</h1>

      <Suspense
        fallback={<span className="loading loading-dots loading-xl"></span>}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6">
          {allBooks.map((singleBook) => (
            <Book key={singleBook.id} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
