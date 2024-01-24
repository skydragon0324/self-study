import React, { useEffect, useState } from "react";


const tempData = [
  "Apple",
  "Banana",
  "Orange",
  "Oil",
  "Tomato",
  "Peanut",
  "Milk",
  "Cherry"
]

type searchType = {
  search : (value: number) => void;
}

export const SearchFilter : React.FC<searchType> = ({ search }) => {
  
  const [filter, setFilter] = useState<string>("");
  
  return (
    <div>
      <div className="flex gap-4 justify-center items-center">
        <label htmlFor="search">Search</label>
        <input 
          className="p-2 rounded-md bg-gray-700 border-gray-400 border-2 text-blue-300 focus:border-blue-500 duration-300 transition-all outline-none" 
          id="search" 
          onChange={(e) => search(parseInt(e.target.value))} 
          placeholder="Search by UserId"
        />
      </div>
    </div>
  )
}