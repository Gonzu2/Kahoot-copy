import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quizService from "./quizService";

const initialState = {
  quiz: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getQuizes = createAsyncThunk(
  "quiz/getQuizes",
  async (thunkAPI) => {
    try {
      return await quizService.getAllQuizes();
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserQuizes = createAsyncThunk(
  "quiz/getUserQuizes",
  async (user, thunkAPI) => {
    try {
      return await quizService.getAllUserQuizes(user.token);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)


const quizSlice = createSlice({
  name: "quizes",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuizes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getQuizes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.quiz = action.payload;
      })
      .addCase(getQuizes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.quiz = null;
      }) 
      .addCase(getUserQuizes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserQuizes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.quiz = action.payload;
      })
      .addCase(getUserQuizes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.quiz = null;
      });
  },
});

export const { reset } = quizSlice.actions;

export default quizSlice.reducer;
