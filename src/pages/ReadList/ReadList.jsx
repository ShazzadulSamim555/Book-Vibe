import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import { getStoredData } from "../../Utility/addToDB";

const ReadList = () => {
  const data=useLoaderData();
  
  useEffect(()=>{
    const getStoredBook= getStoredData();
    // console.log(getStoredBook);
    const convert= getStoredBook.map((id)=>parseInt(id));
    const myReadList= convert.filter(book=> convert.includes(book.bookId));
    console.log(myReadList);
  },[data])
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
          Tab content 1
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
