import {ErrorSliceType} from "../../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: ErrorSliceType = {
    nameErr: "",
    emailErr: "",
    sourceErr: "",
    destinationErr: "",
    dateErr: "",
    fareErr: "",
    accountErr: "",
    cardError: ""
};

const errorSlice = createSlice({
    name: "error",
    initialState,
    reducers: {
        resetErrors: (state: ErrorSliceType) => {
            state.nameErr = "";
            state.emailErr = "";
            state.sourceErr = "";
            state.destinationErr = "";
            state.dateErr = "";
            state.fareErr = "";
            state.accountErr = "";
            state.cardError = "";
        },
        changeNameErr: (state: ErrorSliceType, action: PayloadAction<string>) => {
            state.nameErr = action.payload;
        },
        changeEmailErr: (state: ErrorSliceType, action: PayloadAction<string>) => {
            state.emailErr = action.payload;
        },
        changeSourceErr: (state: ErrorSliceType, action: PayloadAction<string>) => {
            state.sourceErr = action.payload;
        },
        changeDestinationErr: (state: ErrorSliceType, action: PayloadAction<string>) => {
            state.destinationErr = action.payload;
        },
        changeDateErr: (state: ErrorSliceType, action: PayloadAction<string>) => {
            state.dateErr = action.payload;
        },
        changeFareErr: (state: ErrorSliceType, action: PayloadAction<string>) => {
            state.fareErr = action.payload;
        },
        changeAccountErr: (state: ErrorSliceType, action: PayloadAction<string>) => {
            state.accountErr = action.payload;
        },
        changeCardErr: (state: ErrorSliceType, action: PayloadAction<string>) => {
            state.cardError = action.payload;
        }
    }
});

export const {resetErrors, changeNameErr, changeEmailErr, changeSourceErr, changeDestinationErr, changeDateErr, changeFareErr, changeAccountErr, changeCardErr} = errorSlice.actions;
export default errorSlice.reducer;