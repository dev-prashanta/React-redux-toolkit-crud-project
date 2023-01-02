import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUsers, getUsers } from "./UserSlice";
const UserList = () => {
  const userdata = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const headers = Object.keys(
    userdata && userdata.length > 0 ? userdata[0] : {}
  );

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <p>user List </p>
      <table>
        <tr>
          {headers.map((item) => {
            return <th>{item}</th>;
          })}
        </tr>
        {userdata.map((item, i) => {
          return (
            <tr key={"key_${i}"}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.view}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default UserList;
