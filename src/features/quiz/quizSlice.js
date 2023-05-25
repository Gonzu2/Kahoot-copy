import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import quizService from "./quizService";

const initialState = {
  quiz: null,
  quizPersonal: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  presonalQuizSuccess: false,
  oneQuiz: null,
  createMessage: null,
  oneQuizProtect: null,
  message: "",
  isSuccessDelete: false,
  isLoadingPersonal: false,
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
      return await quizService.postCreateQuiz(data.token, data.quiz);
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

export const updateQuiz = createAsyncThunk(
  "quiz/updateQuiz",
  async (data, thunkAPI) => {
    try {
      return await quizService.updateOneQuiz(data.quiz, data.id, data.token);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getQuizByIdProtect = createAsyncThunk(
  "quiz/getQuizByIdProtect",
  async (data, thunkAPI) => {
    try {
      return await quizService.getOneQuizProtect(data.id, data.token);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteQuiz = createAsyncThunk(
  "quiz/deleteQuiz",
  async (data, thunkAPI) => {
    try {
      return await quizService.deleteUserQuiz(data.id, data.token);
    } catch (err) {
      const message =
        (err.response && err.response.data && err.response.data.message) ||
        err.message ||
        err.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const updatePlays = createAsyncThunk(
  "quiz/updatePlays",
  async (id, thunkAPI) => {
    try {
      return await quizService.updateQuizPlays(id);
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
      .addCase(getQuizes.rejected, handleRejected )
      .addCase(getUserQuizes.pending,  (state, action) => {
        handlePending(state)
        state.presonalQuizSuccess = false
        state.isLoadingPersonal= true;
      })
      .addCase(getUserQuizes.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.quizPersonal = action.payload;
        state.presonalQuizSuccess = true
        state.isLoadingPersonal = false;
      })
      .addCase(getUserQuizes.rejected,  (state, action) => {
        handleRejected(state)
        state.presonalQuizSuccess = true
        state.isLoadingPersonal = false;
      })
      .addCase(createQuiz.pending, handlePending)
      .addCase(createQuiz.fulfilled,  (state, action) => {
        handleFulfilled(state)
        state.createMessage = action.payload // send back the created quiz
      })
      .addCase(createQuiz.rejected, handleRejected)
      .addCase(GetQuizById.pending, handlePending)
      .addCase(GetQuizById.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.oneQuiz = action.payload;
      })
      .addCase(GetQuizById.rejected, handleRejected)

      .addCase(updateQuiz.pending, handlePending)
      .addCase(updateQuiz.fulfilled, handleFulfilled)
      .addCase(updateQuiz.rejected, handleRejected)
      .addCase(getQuizByIdProtect.pending, handlePending)
      .addCase(getQuizByIdProtect.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.oneQuizProtect = action.payload;
      })
      .addCase(getQuizByIdProtect.rejected, handleRejected)
      .addCase(deleteQuiz.pending, (state, action) => {
        handlePending(state);
        state.isSuccessDelete = true;
      })
      .addCase(deleteQuiz.fulfilled, (state, action) => {
        handleFulfilled(state);
        state.isSuccessDelete = true;
      })
      .addCase(deleteQuiz.rejected, handleRejected)
  },
});

export const { reset } = quizSlice.actions;

export default quizSlice.reducer;
