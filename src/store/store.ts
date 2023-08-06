// redux/store.js
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { productReducer } from "../reducer/productslide";
// Create the Redux store
const store = configureStore({
  reducer: {
    products: productReducer
    // Add more reducers here if you have additional state properties
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export default store