export type PassengerSliceType = {
    name: string;
    email: string;
    source: string;
    destination: string;
    travelDate: string;
    fare: number;
}

export type PaymentSliceType = {
    accountNo: string;
    cardType: string;
}

export type ErrorSliceType = {
    nameErr: string;
    emailErr: string;
    sourceErr: string;
    destinationErr: string;
    dateErr: string;
    fareErr: string;
    accountErr: string;
    cardError: string;
}

export type BookingType = {
    passengerInfo: PassengerSliceType;
    paymentInfo: PaymentSliceType;
}