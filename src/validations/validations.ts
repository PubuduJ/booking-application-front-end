import {ErrorSliceType, PassengerSliceType, PaymentSliceType} from "../types/types";
import {AnyAction, Dispatch, ThunkDispatch} from "@reduxjs/toolkit";

export function passengerDataValidations(passenger: PassengerSliceType, payment: PaymentSliceType, dispatch: ThunkDispatch<{passenger: PassengerSliceType, payment: PaymentSliceType, errorMsg: ErrorSliceType}, undefined, AnyAction> & Dispatch<any>) {

}