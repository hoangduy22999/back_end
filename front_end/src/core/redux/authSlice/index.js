import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { clearAccessToken, setAccessToken } from '@/utils/storage';
import authService from '@/core/services/auth';

const initialState = {
  isLogin: false,
  loading: false,
  resLogin: undefined,
};

export const login = createAsyncThunk('LOGIN', async (payload, { rejectWithValue }) => {
  try {
    const res = await authService.login(payload);
    return res;
  } catch (err) {
    return rejectWithValue(err);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      clearAccessToken();
      state.isLogin = false;
    },
    resetRes: (state) => {
      state.resLogin = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.isLogin = true;
      state.loading = false;
      setAccessToken(action.payload);
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLogin = false;
      state.loading = false;
      state.resLogin = action.payload;
    });
  },
});

export const { logout, resetRes } = authSlice.actions;

export default authSlice.reducer;
