import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./feature/userSlice";
export const store = configureStore({
  reducer: {
    userState: userSlice,
  },
});

// setelah di daftarkan jangan lupa untuk memasang provider pada parent app
