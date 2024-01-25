import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { StateInterface } from "@/store/store";
import { Dispatch } from "redux";



const Users : React.FC<userType> = ({ userId }) => {
  const { users } = useSelector<StateInterface, UserStateType>((state) => state.UserReducer);
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    (async() => { 
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/").then((res) => res.json());
        if(response) {
          dispatch({
            type: "CHANGE_USERS",
            payload: {
              users: response
            }
          })
        }
      } catch (error) {
        console.log(error);        
      }
    })();
  }, [])
 
  const [filterUsers, setFilterUsers] = useState<User[] | undefined>([]);
  
  useEffect(() => {
    const tempUsers = users?.filter((user) => !userId || user.userId === userId);
    setFilterUsers(tempUsers);
  },[userId, users])
  
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