import React, { useState, useEffect } from "react";
import { User } from "../../utils/types";
import axios from "axios";
import { UseAppContext } from "../context/AppContextProvider";


type userType = {
  userId: number | null;
}

const Users : React.FC<userType> = ({ userId }) => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    (async() => { 
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json());
        console.log("users:", response);
        setApiData(response);
      } catch (error) {
        console.log(error);        
      }
    })();
  }, [])
  const [filterUsers, setFilterUsers] = useState<User[]>([]);
  
  useEffect(() => {
    const tempUsers = users.filter((user) => !userId || user.userId === userId);
    setFilterUsers(tempUsers);
  },[userId, users])

  const context = UseAppContext();
  if (!context) {
    console.log("AppContext not Found");
    return null!
  }
    // fetch data
  const {
    global:{
          globalValue  
    },
    apiValue:{
          apiData, setApiData
    }
  } = context
  console.log("global", globalValue);
  console.log("apiValue", apiData);
  
  return (
    <div className="flex flex-col w-1/2 pt-20 text-xl gap-4 text-gray-500  bg-gray-800 justify-center items-center">
      <div className="flex gap-4">
        <div className="w-10">ID</div>
        <div className="w-20">UserId</div>
        <div className="w-[300px]">Title</div>
        <div className="w-[200px]">Completed</div>
      </div>
      <div className="flex flex-col gap-4 text-blue-300">
        {filterUsers?.slice(0,10).map((user) => (
          <div key={user.id} className="flex gap-4 justify-center border-b-gray-300 border-b-2">
            <div  className="w-10">{user.id}</div>
            <div  className="w-20">{user.userId}</div>
            <div  className="w-[300px]">{user.title}</div>
            <div  className="w-[200px]">{user.completed ? "Completed" : "Progress"}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Users;