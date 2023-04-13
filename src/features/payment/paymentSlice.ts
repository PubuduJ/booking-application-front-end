import {PaymentSliceType} from "../../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: PaymentSliceType = {
    accountNo: "",
    cardType: ""
};

const paymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        resetPayment: (state: PaymentSliceType) => {
            state.accountNo = "";
            state.cardType = "";
        },
        changeAccountNo: (state: PaymentSliceType, action: PayloadAction<string>) => {
            state.accountNo = action.payload;
        },
        changeCardType: (state: PaymentSliceType, action: PayloadAction<string>) => {
            state.cardType = action.payload;
        }
    }
});

export const {resetPayment, changeAccountNo, changeCardType} = paymentSlice.actions;
export default paymentSlice.reducer;