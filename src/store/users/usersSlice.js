import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const baserUrl = 'https://randomuser.me/api/?results=5';

const initialState = {
  users: [],
  isLoading: false,
  error: false,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    return fetch(baserUrl)
    .then((res) => res.json())
  } catch (err) {
    console.log(err);
  }
});

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.results;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const usersReducers = usersSlice.reducer;
