import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "./store/store";
import {BookingType} from "./types/types";

function App() {
    const {passenger, payment, errorMsg} = useAppSelector((store) => {
        return store;
    });
    const dispatch = useAppDispatch();
    const [responseMessage, setResponseMessage] = useState<string>("");

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setResponseMessage("");
        if (!/^[A-Za-z][A-Za-z ]+$/.test(passenger.name)
            || !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(passenger.email)
            || !/^[A-Za-z][A-Za-z ]+$/.test(passenger.source)
            || !/^[A-Za-z][A-Za-z ]+$/.test(passenger.destination)
            || !/^\d{4}-\d{2}-\d{2}$/.test(passenger.travelDate)
            || passenger.fare <= 10000 || passenger.fare >= 1000000
            || !payment.accountNo || !payment.cardType) {
            return;
        }
        const booking: BookingType = {passengerInfo: passenger, paymentInfo: payment};
        console.log(booking);
    }

    return (
        <>
            <div className="container-fluid bg-gradient text-light py-3">
                <header className="text-center">
                    <h2 className="fw-bold text-decoration-underline">Flight Booking App</h2>
                </header>
            </div>
            <section className="container my-2 bg-gradient w-50 text-light">
                <form onSubmit={handleSubmit} className="row g-3 p-3">
                    <div className="sub-topics">Passenger Info</div>
                    <div className="col-md-12">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setResponseMessage("");
                        }
                        } type="text" className="form-control" id="name" value={passenger.name}/>
                        <div className="error-msg">{errorMsg.nameErr}</div>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setResponseMessage("");
                        }
                        } type="email" className="form-control" id="email" value={passenger.email}/>
                        <div className="error-msg">{errorMsg.emailErr}</div>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="source" className="form-label">Source</label>
                        <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setResponseMessage("");
                        }
                        } type="text" className="form-control" id="source" value={passenger.source}/>
                        <div className="error-msg">{errorMsg.sourceErr}</div>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="destination" className="form-label">Destination</label>
                        <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setResponseMessage("");
                        }
                        } type="text" className="form-control" id="destination"
                               value={passenger.destination}/>
                        <div className="error-msg">{errorMsg.destinationErr}</div>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="travelDate" className="form-label">Travel Date</label>
                        <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setResponseMessage("");
                        }
                        } type="date" className="form-control" id="travelDate"
                               value={passenger.travelDate}/>
                        <div className="error-msg">{errorMsg.dateErr}</div>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="fare" className="form-label">Fare</label>
                        <input onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setResponseMessage("");
                        }
                        } type="number" min="0" className="form-control" id="fare" value={passenger.fare}/>
                        <div className="error-msg">{errorMsg.fareErr}</div>
                    </div>
                    <hr className="horizontal-rule"/>
                    <div className="sub-topics">Payment Info</div>
                    <div className="col-md-6">
                        <label htmlFor="accountNo" className="form-label">Account No</label>
                        <select onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            setResponseMessage("");
                        }
                        } id="accountNo" className="form-select">
                            <option value={""}>select account no</option>
                            <option value={"account 1"}>account 1</option>
                            <option value={"account 2"}>account 2</option>
                            <option value={"account 3"}>account 3</option>
                            <option value={"account 4"}>account 4</option>
                        </select>
                        <div className="error-msg">{errorMsg.accountErr}</div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="cardType" className="form-label">Card Type</label>
                        <select onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            setResponseMessage("");
                        }
                        } id="cardType" className="form-select">
                            <option value={""}>select card type</option>
                            <option value={"VISA"}>VISA</option>
                            <option value={"MASTER"}>MASTER</option>
                        </select>
                        <div className="error-msg">{errorMsg.cardError}</div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
                <h6 className="mt-2 text-light text-center">{responseMessage}</h6>
            </section>
        </>
    );
}

export default App;
