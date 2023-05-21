import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quizService from "./quizService";

const initialState = {
  quiz: null,
  quizPersonal: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  testSuccess: false,
  oneQuiz: null,
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
export const GetQuizById = createAsyncThunk(
  "quiz/getQuizById",
  async (id, thunkAPI) => {
    try {
      return await quizService.getOneQuiz(id);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const quizSlice = createSlice({
  name: "quizzes",
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
    const handlePending = (state) => {
      state.isLoading = true;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    };

    const handleFulfilled = (state) => {
      state.isLoading = false;
      state.isSuccess = true;
    };

    const handleRejected = (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    };

    builder
      .addCase(getQuizes.pending, handlePending)
      .addCase(getQuizes.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.quiz = action.payload;
      })
      .addCase(getQuizes.rejected, handleRejected)
      .addCase(getUserQuizes.pending, handlePending)
      .addCase(getUserQuizes.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.quizPersonal = action.payload;
      })
      .addCase(getUserQuizes.rejected, handleRejected)
      .addCase(createQuiz.pending, handlePending)
      .addCase(createQuiz.fulfilled, handleFulfilled)
      .addCase(createQuiz.rejected, handleRejected)
      .addCase(GetQuizById.pending, handlePending)
      .addCase(GetQuizById.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.oneQuiz = action.payload;
      })
      .addCase(GetQuizById.rejected, handleRejected);
  },
});

export const { reset } = quizSlice.actions;

export default quizSlice.reducer;
