import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // isUserLoggedIn: AsyncStorage.get('ZjsmNktQYO') ? true : false,
  loggedInUser: {},
};

const sessionSlice = createSlice({
  name: 'sessionSlice',
  initialState: initialState,
  reducers: {
    setAuth: (state, action) => {
      // AsyncStorage.set('ZjsmNktQYO' || 'bIESIcg42Wb9', action.payload);
      state.loggedInUser = action.payload;
    },

    setDestroyAuth: () => {
      // AsyncStorage.clearAll();
    },
  },
});

export const { setAuth, setDestroyAuth } = sessionSlice.actions;

export default sessionSlice.reducer;
