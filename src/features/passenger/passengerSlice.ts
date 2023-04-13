import {PassengerSliceType} from "../../types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: PassengerSliceType = {
    name: "",
    email: "",
    source: "",
    destination: "",
    travelDate: "",
    fare: 0
};

const passengerSlice = createSlice({
    name: "passenger",
    initialState,
    reducers: {
        resetPassenger: (state: PassengerSliceType) => {
            state.name = "";
            state.email = "";
            state.source = "";
            state.destination = "";
            state.travelDate = "";
            state.fare = 0;
        },
        changeName: (state: PassengerSliceType, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        changeEmail: (state: PassengerSliceType, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        changeSource: (state: PassengerSliceType, action: PayloadAction<string>) => {
            state.source = action.payload;
        },
        changeDestination: (state: PassengerSliceType, action: PayloadAction<string>) => {
            state.destination = action.payload;
        },
        changeTravelDate: (state: PassengerSliceType, action: PayloadAction<string>) => {
            state.travelDate = action.payload;
        },
        changeFare: (state: PassengerSliceType, action: PayloadAction<any>) => {
            state.fare = action.payload;
        }
    }
});

export const {resetPassenger, changeName, changeEmail, changeSource, changeDestination, changeTravelDate, changeFare} = passengerSlice.actions;
export default passengerSlice.reducer;