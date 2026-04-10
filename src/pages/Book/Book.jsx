import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {
    bookName,
    author,
    image,
    tags,
    category,
    rating,
    review,
    bookId,
    yearOfPublishing,
  } = singleBook;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div>
        <div className="card shadow-sm p-4 flex flex-col gap-5">
          <figure className="bg-base-300 rounded-lg p-4">
            <img
              className="h-36 rotate-x-12 rotate-y-12"
              src={image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium rounded-full bg-green-200 text-green-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2>
              <span className="text-xl font-semibold">{bookName} </span>
              <span className="bg-gray-300 px-2 py-1 rounded-full text-xs">
                {yearOfPublishing}
              </span>
            </h2>
            <p className="text-gray-600">
              By: <span className="font-bold">{author}</span>
            </p>

            <div className="card-actions flex justify-between border-t-2 border-dashed">
              <div className="badge badge-outline mt-2">{category}</div>
              <div className="badge badge-outline mt-2">
                {rating} <CiStar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
