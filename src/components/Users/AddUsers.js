import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUsers } from "./UserSlice";
const AddUsers = () => {
  const dispatch = useDispatch();
  const [usersArr, setusersArr] = useState({ name: "", age: "", view: 0 });
  const handleChange = (e) => {
    const name = e.target.name;
    const newUsers = { ...usersArr, [name]: e.target.value };
    setusersArr(newUsers);
  };
  return (
    <>
      <input name="name" value={usersArr.name} onChange={handleChange} />
      <br />
      <input name="age" value={usersArr.age} onChange={handleChange} />
      <button onClick={() => dispatch(addUsers(usersArr))}>Add users</button>
    </>
  );
};

export default AddUsers;
