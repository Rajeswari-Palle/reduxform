import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  phoneNumber: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<Omit<User, "id">>) => {
      const newUser = {
        ...action.payload,
        id: Date.now().toString(), // Generates a unique ID
      };
      state.users.push(newUser);
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
