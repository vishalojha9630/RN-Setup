import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUserLoggedIn: AsyncStorage.getItem('ZjsmNktQYO') ? true : false,
  loggedInUser: {},
};

const sessionSlice = createSlice({
  name: 'session',
  initialState: initialState,
  reducers: {
    setAuth: (state, action) => {
      state.loggedInUser = action?.payload;
      AsyncStorage.setItem('ZjsmNktQYO', JSON.stringify(action?.payload));
      state.isUserLoggedIn = true;
    },

    setDestroyAuth: (state) => {
      AsyncStorage.removeItem('ZjsmNktQYO');
      state.isUserLoggedIn = false;
    },
  },
});

export const { setAuth, setDestroyAuth } = sessionSlice.actions;

export default sessionSlice.reducer;
