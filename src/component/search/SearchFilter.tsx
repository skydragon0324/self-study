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

export const SearchFilter : React.FC = () => {
  
  const [filter, setFilter] = useState<string>("");
  const [dataList, setDataList] = useState<string[]>([]);

  useEffect(() => {
    const data = tempData.filter((data) => data.toLowerCase().includes(filter.toLowerCase()));
    setDataList(data);
  }, [filter])
  
  return (
    <div>
      <div className="flex gap-4">
        <label htmlFor="search">Search</label>
        <input id="search" onChange={(e) => setFilter(e.target.value)} value={filter} />
      </div>
      <div className="flex flex-col gap-4">
        {dataList.map((data, index)  => (
          <p className="text-white text-xl" key={index}>
            {index + 1} : {data}
          </p>
          )
        )}
      </div>
    </div>
  )
}