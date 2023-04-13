import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "./store/store";

function App() {
    const {passenger, payment, errorMsg} = useAppSelector((store) => {
        return store;
    });
    const dispatch = useAppDispatch();
    const [responseMessage, setResponseMessage] = useState<string>("");

    return (
        <>
            <>
                <div className="container-fluid bg-gradient text-light py-3">
                    <header className="text-center">
                        <h2 className="fw-bold text-decoration-underline">Flight Booking App</h2>
                    </header>
                </div>
                <section className="container my-2 bg-gradient w-50 text-light">
                    <form className="row g-3 p-3">
                        <div className="sub-topics">Passenger Info</div>
                        <div className="col-md-12">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name"/>
                            <div className="error-msg">Error Message</div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                            <div className="error-msg">Error Message</div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="source" className="form-label">Source</label>
                            <input type="text" className="form-control" id="source"/>
                            <div className="error-msg">Error Message</div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="destination" className="form-label">Destination</label>
                            <input type="text" className="form-control" id="destination"/>
                            <div className="error-msg">Error Message</div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="travelDate" className="form-label">Travel Date</label>
                            <input type="date" className="form-control" id="travelDate"/>
                            <div className="error-msg">Error Message</div>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="fare" className="form-label">Fare</label>
                            <input type="number" min="0" className="form-control" id="fare"/>
                            <div className="error-msg">Error Message</div>
                        </div>
                        <hr className="horizontal-rule"/>
                        <div className="sub-topics">Payment Info</div>
                        <div className="col-md-6">
                            <label htmlFor="accountNo" className="form-label">Account No</label>
                            <select id="accountNo" className="form-select">
                                <option value={""}>select account no</option>
                                <option value={"account 1"}>account 1</option>
                                <option value={"account 2"}>account 2</option>
                                <option value={"account 3"}>account 3</option>
                                <option value={"account 4"}>account 4</option>
                            </select>
                            <div className="error-msg">Error Message</div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="cardType" className="form-label">Card Type</label>
                            <select id="cardType" className="form-select">
                                <option value={""}>select card type</option>
                                <option value={"VISA"}>VISA</option>
                                <option value={"MASTER"}>MASTER</option>
                            </select>
                            <div className="error-msg">Error Message</div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    <h6 className="mt-2 text-light text-center">Response Message</h6>
                </section>
            </>
        </>
    );
}

export default App;
