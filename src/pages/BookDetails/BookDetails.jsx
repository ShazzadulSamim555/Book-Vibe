import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../Utility/addToDB";

const BookDetails = () => {
  const { id } = useParams();

  const data = useLoaderData();
  // console.log(data);
  const book = data.find((b) => b.bookId === parseInt(id));
  // console.log(book);

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
  } = book;

  const handleMarkAsRead=(id)=>{
    addToStoredDB(id);
  }

  // console.log(id);
  return (
    <div className="max-w-6xl mx-auto p-3 flex gap-10">
      <div className="bg-gray-300 p-5 rounded-lg flex-1 flex justify-center items-center">
        <img className="h-96 rotate-x-12 rotate-y-12 rounded-lg" src={image} alt="" />
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-4xl font-semibold">{bookName}</h1>
            <p>By: <span className="text-gray-500 font-bold">{author}</span></p>
          </div>
          <hr className="bg-gray-400 h-[1px] border-0" />
          <div>
            <h3 className="text-gray-500">{category}</h3>
          </div>
          <hr className="bg-gray-400 h-[1px] border-0" />
          <div className="space-y-4">
            <p>
              <span className="font-bold">Review:</span>{" "}
              <span className="text-sm text-gray-500">{review}</span>
            </p>
            <h3 className="space-x-3">
              <span className="font-semibold">Tag</span>{" "}
              {tags.map((tag) => (
                <span className="bg-green-200 text-green-700 px-2 py-1 rounded-full">
                  # {tag}
                </span>
              ))}
            </h3>
          </div>
          <hr className="bg-gray-400 h-[1px] border-0" />
          <div>
            <p className="space-x-5">
              <span className="text-gray-500">Number of Pages:</span>{" "}
              <span className="font-bold">{totalPages}</span>
            </p>
            <p className="space-x-5">
              <span className="text-gray-500">Publisher:</span>{" "}
              <span className="font-bold">{publisher}</span>
            </p>
            <p className="space-x-5">
              <span className="text-gray-500">Year of Publishing:</span>{" "}
              <span className="font-bold">{yearOfPublishing}</span>
            </p>
            <p className="space-x-5">
              <span className="text-gray-500">Rating:</span>{" "}
              <span className="font-bold">{rating}</span>
            </p>
          </div>
          <div className="flex gap-5">
            <button onClick={()=>handleMarkAsRead(id)} className="btn btn-neutral btn-outline">Mark as Read</button>
            <button className="btn btn-outline btn-success">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
