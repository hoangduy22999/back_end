/* eslint-disable no-unused-vars */
// eslint-disable no-console
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import usersService from '@/core/services/users';

const initialState = {
  listUsers: [],
  resCreateUser: undefined,
};

export const getListUser = createAsyncThunk('GET_LIST_USER', async (_, { rejectWithValue }) => {
  try {
    const res = await usersService.getListUser();
    return res;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const createUser = createAsyncThunk('CREATE_USER', async (payload, { rejectWithValue }) => {
  try {
    const res = await usersService.createUser(payload);
    return res;
  } catch (err) {
    return rejectWithValue(err.response);
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearCRUDResponse: (state) => {
      state.resCreateUser = undefined;
    },
  },
  extraReducers: (builder) => {
    // CREATE USER
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.resCreateUser = action.payload;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.resCreateUser = action.payload;
    });

    // GET LIST USERS
    builder.addCase(getListUser.fulfilled, (state, action) => {
      state.listUsers = action.payload;
    });
    builder.addCase(getListUser.rejected, (state, action) => {
      state.listUsers = [];
    });
  },
});

export default userSlice.reducer;
