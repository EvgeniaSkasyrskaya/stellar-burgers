import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getFeedsApi } from '../../utils/burger-api';
import { TOrder } from '../../utils/types';

export const fetchFeeds = createAsyncThunk('feeds/fetch', async () =>
  getFeedsApi()
);

interface TFeeds {
  orders: TOrder[];
  total: number;
  totalToday: number;
}

export interface BurgerFeedsState {
  feeds: TFeeds;
  isFeedsLoading: boolean;
}

const initialState: BurgerFeedsState = {
  feeds: {
    orders: [],
    total: 0,
    totalToday: 0
  },
  isFeedsLoading: false
};

export const feedsSlice = createSlice({
  name: 'feeds',
  initialState,
  reducers: {},
  selectors: {
    getFeeds: (state) => state.feeds,
    getOrders: (state) => state.feeds.orders
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFeeds.pending, (state) => {
        state.isFeedsLoading = true;
      })
      .addCase(fetchFeeds.rejected, (state) => {
        state.isFeedsLoading = false;
      })
      .addCase(fetchFeeds.fulfilled, (state, action: PayloadAction<TFeeds>) => {
        state.isFeedsLoading = false;
        state.feeds = action.payload;
      });
  }
});

export const { getFeeds, getOrders } = feedsSlice.selectors;
export default feedsSlice.reducer;
