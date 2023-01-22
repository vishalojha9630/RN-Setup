import { configureStore } from '@reduxjs/toolkit';

// import sessionSlice from './slice/session-slice';
import sessionSlice from './slices/session';

const store = configureStore({
  reducer: {
    session: sessionSlice,
  },
});

export default store;
