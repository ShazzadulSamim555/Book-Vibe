import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredData } from "../../Utility/addToDB";
import SingleBook from "./SingleBook";

const ReadList = () => {
  const data = useLoaderData();

  const [readList, setReadList]= useState([]);


  useEffect(() => {
    const storedBookIds = getStoredData(); // LocalStorage থেকে ID গুলো নিলেন
    const storedBookIdsInt = storedBookIds.map((id) => parseInt(id)); // সেগুলোকে Integer বানালেন
    console.log(storedBookIdsInt);

    const myReadList= data.filter((book)=> storedBookIdsInt.includes(book.bookId));
    setReadList(myReadList);
    // Loader থেকে আসা 'data' (সব বই) থেকে শুধুমাত্র জমানো ID-র বইগুলো খুঁজে বের করুন
    // const myReadList = data.filter((book) =>
    //   storedBookIdsInt.includes(book.bookId),
    // );

    // console.log(myReadList);
  }, [data]);
  return (
    <div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab checked:bg-gray-300 checked:rounded-2xl checked:font-semibold"
          aria-label="Read Book"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="space-y-3">
            {
              readList.map((singleBook)=><SingleBook key={singleBook.bookId} singleBook={singleBook}></SingleBook>)
            }
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab checked:bg-gray-300 checked:rounded-2xl checked:font-semibold"
          aria-label="Whish List"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default ReadList;
