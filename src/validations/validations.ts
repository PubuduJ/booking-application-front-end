import {ErrorSliceType, PassengerSliceType, PaymentSliceType} from "../types/types";
import {AnyAction, Dispatch, ThunkDispatch} from "@reduxjs/toolkit";
import {
    changeAccountErr, changeCardErr,
    changeDateErr,
    changeDestinationErr,
    changeEmailErr, changeFareErr,
    changeNameErr,
    changeSourceErr
} from "../features/error/errorSlice";

export function passengerDataValidations(passenger: PassengerSliceType, payment: PaymentSliceType, dispatch: ThunkDispatch<{passenger: PassengerSliceType, payment: PaymentSliceType, errorMsg: ErrorSliceType}, undefined, AnyAction> & Dispatch<any>) {
    if (!/^[A-Za-z][A-Za-z ]+$/.test(passenger.name)) {
        dispatch(changeNameErr("Passenger name is empty or invalid"));
    }
    if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(passenger.email)) {
        dispatch(changeEmailErr("Passenger email is empty or invalid"));
    }
    if (!/^[A-Za-z][A-Za-z ]+$/.test(passenger.source)) {
        dispatch(changeSourceErr("Source is empty or invalid"));
    }
    if (!/^[A-Za-z][A-Za-z ]+$/.test(passenger.destination)) {
        dispatch(changeDestinationErr("Destination is empty or invalid"));
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(passenger.travelDate)) {
        dispatch(changeDateErr("Date is empty or not in the correct format"));
    }
    if (passenger.fare <= 10000) {
        dispatch(changeFareErr("Fare should be greater than 10000"));
    }
    if (passenger.fare >= 1000000) {
        dispatch(changeFareErr("Fare should be less than 1000000"));
    }
    if (!payment.accountNo) {
        dispatch(changeAccountErr("Please select an account"));
    }
    if (!payment.cardType) {
        dispatch(changeCardErr("Please select a card"));
    }
}