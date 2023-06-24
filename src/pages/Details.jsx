import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function Details() {
    const { state } = useLocation();
    console.log(state);
    const navigate = useNavigate();

    return (
        // Details Page Container.
        <div className="m-2">
            {/* Back To Home Button */}
            <div className="bg-red-400 mt-5">
                <button
                    className="flex justify-center items-center bg-blue-400"
                    onClick={() => navigate(-1)}
                >
                    <IoIosArrowBack />
                    <span>Back</span>
                </button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <img src={state.flags.png} alt="" />
        </div>
    );
}

export default Details;
