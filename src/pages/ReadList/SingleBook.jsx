import React from "react";
import { SiIlovepdf } from "react-icons/si";
import { SiAffinitypublisher } from "react-icons/si";

const SingleBook = ({ singleBook }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = singleBook;
  return (
    <div className="flex gap-5 p-3 shadow-xl rounded-lg">
      <div className="w-1/6 p-3 rounded-lg bg-gray-200 flex justify-center items-center">
        <img className="w-32" src={image} alt="" />
      </div>

      <div className="space-y-3">
        <h1 className="text-2xl font-semibold">{bookName}</h1>
        <p>
          By: <span className="text-gray-400 font-semibold">{author}</span>
        </p>
        <div className="flex gap-4 items-center">
          <div className="flex gap-3 items-center">
            {" "}
            <span className="font-bold">Tags: </span>
            {tags.map((tag) => (
              <p className="bg-green-100 px-2 py-1 rounded-full text-green-600">
                {tag}
              </p>
            ))}
          </div>
          <div className="text-xs text-gray-600">
            Year of the Publishing:{" "}
            <span className="font-bold">{yearOfPublishing}</span>
          </div>
        </div>

        <div className="flex justify-between">
          <p className="text-gray-600 text-sm flex items-center gap-2">
            <SiAffinitypublisher />
            Publisher: {publisher}
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            <SiIlovepdf />
            Pages: {totalPages}
          </p>
        </div>

        <hr  className=" bg-gray-600 h-0.5"/>

        <div className="flex gap-2">
            <div className="text-sm rounded-full px-2 py-1 bg-blue-300 text-blue-800"> Category: {category}</div>
            <div className="text-sm rounded-full px-2 py-1 bg-amber-100 text-amber-800">Rating: {rating}</div>
            <div className="text-sm rounded-full px-2 py-1 bg-purple-700 text-white font-bold">View Details</div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
