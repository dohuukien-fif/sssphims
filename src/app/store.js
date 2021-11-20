import { configureStore } from '@reduxjs/toolkit';
// import counterSlice from '../features/couter/component/couterSclice';
// import userSlice from '../features/Auth/userSlice/userSlice';
import CartSlice from './../features/cart/cartSlice';
import TotalSlice from './../features/cart/cartSlice/totalslice';
import InforlSlice from './../features/cart/cartSlice/Information';
import ChecklSlice from './../features/cart/cartSlice/checkout';
const rootReducer = {
  // counter: counterSlice,
  // user: userSlice,
  carts: CartSlice,
  total: TotalSlice,
  infor: InforlSlice,
  Check: ChecklSlice,
};
const store = configureStore({
  reducer: rootReducer,
});
export default store;
