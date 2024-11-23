import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import themeSlice from "./slices/themeSlice";
import pathSlice from "./slices/pathSlice";

const persistConfig = {
  key: "hsp_management_main",
  storage,
};

const reducers = combineReducers({
  theme: themeSlice,
  path: pathSlice,
});

const persistSliceReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: {
    persistSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
persistStore(store);
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
