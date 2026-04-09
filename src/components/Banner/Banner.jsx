import React from "react";
import bookImage from "../../assets/Memory.jpg";

const Banner = () => {
  return (
    <div className="bg-gray-200 rounded-lg my-10 py-14">
      <div className="flex justify-between items-center max-w-4xl mx-auto gap-20 ">
        <div className="space-y-10">
          <h1 className="text-6xl font-semibold">
            Books to freshen up your bookshelf
          </h1>
          <button className="btn btn-outline btn-success hover:text-white">View The List</button>
        </div>
        <div className="">
          <img className="h-1/2 w-full -rotate-x-16 rotate-y-12 duration-1000" src={bookImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;