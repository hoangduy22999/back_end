import axiosClient from '@/core/services/axiosClient';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: undefined,
  loading: false,
};

export const getProfileAction = createAsyncThunk('PROFILE', async (_, { rejectWithValue }) => {
  try {
    const res = await axiosClient.get('profile');
    return res;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfileAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProfileAction.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.profile = payload;
    });
    builder.addCase(getProfileAction.rejected, (state) => {
      state.loading = false;
      state.profile = undefined;
    });
  },
});

export default profileSlice.reducer;
