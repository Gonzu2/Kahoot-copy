import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quizService from "./quizService";

const initialState = {
  quiz: null,
  quizPersonal: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  testSuccess: false,
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
  async (token, thunkAPI) => {
    try {
      return await quizService.getAllUserQuizes(token);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
)

export const createQuiz = createAsyncThunk(
  "quiz/createQuiz",
  async (data, thunkAPI) => {
    try {
      console.log("sending data: ",data)
      return await quizService.postCreateQuiz(data.token, data.quiz);
      console.log("done sending")
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
        state.isSuccessGetUserQuiz = true;
        state.quizPersonal = action.payload;
      })
      .addCase(getUserQuizes.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.quizPersonal = null;
      })
      .addCase(createQuiz.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createQuiz.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.quizPersonal = action.payload;
      })
      .addCase(createQuiz.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.quizPersonal = null;
      })
  },
});

export const { reset } = quizSlice.actions;

export default quizSlice.reducer;
