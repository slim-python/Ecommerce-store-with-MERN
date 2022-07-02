import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//new review

export const newReview = createAsyncThunk(
  "review/newReview",
  async (reviewData, thunkAPI) => {
    try {
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.put(`/api/v1/review`, reviewData, config);
      return await data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = { message: "", Reviewsuccess: false };
const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(newReview.fulfilled, (state, action) => {
      state.Reviewsuccess = action.payload.success;
    });
  },
});

export default reviewSlice.reducer;
