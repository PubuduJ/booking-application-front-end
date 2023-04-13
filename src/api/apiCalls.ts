import axios from "axios";
import {BookingType} from "../types/types";

// Base url.
const url = "http://localhost:8080/app/api/bookings";

export function postCall(output: BookingType) {
    return axios.post(url, output);
}