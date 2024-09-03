import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFoodData = createAsyncThunk(
  "dashboard/fetchFoodData",
  async ({ path, params }) => {
    try {
      const respose = await axios.get(path, {
        params,
      });

      if (respose && respose.status === 200) {
        return respose?.data;
      }
    } catch (err) {
      return err.message;
    }
  }
);

const initialState = {
  food_data: [],
  error: null,
  isLoading: false,
};

export const foodDataSlice = createSlice({
  name: "food_data",
  initialState,
  extraReducers: (bulider) => {
    bulider.addCase(fetchFoodData.fulfilled, (state, action) => {
      return {
        ...state,
        food_data: action?.payload?.data,
        isLoading: false,
      };
    });
    bulider.addCase(fetchFoodData.pending, (state, action) => {
      return {
        ...state,
        isLoading: true,
      };
    });
    bulider.addCase(fetchFoodData.rejected, (state, action) => {
      return {
        ...state,
        error: true,
      };
    });
  },
});

export default foodDataSlice.reducer;
