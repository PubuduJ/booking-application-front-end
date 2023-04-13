import {configureStore} from "@reduxjs/toolkit";
import passengerReducer from "../features/passenger/passengerSlice";
import paymentReducer from "../features/payment/paymentSlice";
import errorReducer from "../features/error/errorSlice";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const store = configureStore({
    reducer: {
        passenger: passengerReducer,
        payment: paymentReducer,
        errorMsg: errorReducer
    }
});

export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;