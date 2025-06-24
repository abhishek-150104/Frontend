  import { configureStore, createSlice } from "@reduxjs/toolkit";
  import userSlice from "./slices/userSlice.js"
import commissionReducer from "./slices/commissionSlice.js";
import auctionReducer from "./slices/auctionSlice.js";
import bidReducer from "./slices/bidSlice.js";
import superAdminReducer from "./slices/superAdminSlice.js"


export const store = configureStore({
  reducer: {
    user: userSlice,
    commission: commissionReducer,
    auction:auctionReducer,
    bid: bidReducer,
    superAdmin: superAdminReducer,
  },
});