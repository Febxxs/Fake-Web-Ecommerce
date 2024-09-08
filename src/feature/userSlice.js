import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// membuat initial state yang akan di gunakan
const initialState = {
  // merubah string ke object yg di ambil dari local storage
  user: JSON.parse(localStorage.getItem("USER")) || null,
};
// membuat slice fungsi  / creatSlice yang terdiri dari name,state,dan reducer

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    //membuat method / fungsi untuk memangil user
    loginUser: (state, action) => {
      // membuat action yang di terima dari loginPage
      const user = action.payload; // mengambil data.data

      // menset state untuk mengisi initial value
      state.user = user;

      // menset state
      localStorage.setItem("USER", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("USER");
      toast.success("Berhasil Logout");
    },
    registerUser: (state, action) => {
      // membuat action yang di terima dari loginPage
      const user = action.payload; // mengambil data.data

      // menset state untuk mengisi initial value
      state.user = user;

      // menset state
      localStorage.setItem("USER", JSON.stringify(user));
    },
  },
});

export const { loginUser, logoutUser, registerUser } = userSlice.actions; // action mengambil dari reducer

// mengexport reducer agar reducer bisa di pakai
export default userSlice.reducer;

//note : daftarkan reducer ke dalam store
