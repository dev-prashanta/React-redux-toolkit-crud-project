import { createSlice } from "@reduxjs/toolkit";
import data from "./data.json";
import fs from "fs";
const initialState = {
  data: []
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // all functions/method to perform
    addUsers: (state, action) => {
      console.log(action.payload);
      fs.writeFile("./data.json", JSON.stringify(action.payload), (err) => {
        if (err) console.log("Error writing file:", err);
      });
      // state.data.push(action.payload);
    },
    getUsers: (state, action) => {
      //state.data = data;
      fs.readFile("./data.json", "utf8", (err, jsonString) => {
        if (err) {
          return;
        }
        try {
          const customer = JSON.parse(jsonString);
          state.data = customer;
        } catch (err) {
          console.log("Error parsing JSON string:", err);
        }
      });
    }
  }
});

export const { addUsers, getUsers } = UserSlice.actions;
export default UserSlice.reducer;
