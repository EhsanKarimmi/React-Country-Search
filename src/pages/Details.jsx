import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

function Details() {
    const { state } = useLocation();
    console.log(state);
    const navigate = useNavigate();

    return (
        // Details Page Container.
        <div className=" ">
            {/* Back To Home Button */}
            <div className="mt-5 font-medium">
                <button
                    className="flex justify-center items-center group py-2 px-5 gap-1 rounded-md border-2 border-[#42C2FF] hover:bg-[#42C2FF] transition-all duration-300"
                    onClick={() => navigate(-1)}
                >
                    <IoIosArrowBack className="group-hover:scale-125 transition-all duration-300 " />
                    <span>Back</span>
                </button>
            </div>
            {/* Country Details */}
            <div className="-300 grid grid-cols-2 mt-5 ">
                <div className=" flex justify-start items-center">
                    <img
                        src={state.flags.png}
                        alt=""
                        className="h-96 w-5/6 rounded-md border-2 border-gray-400"
                    />
                </div>
                <div className="space-y-4">
                    <h2 className="uppercase font-semibold text-4xl">{state.name.common}</h2>
                    <p className="text-lg font-medium">
                        <span className="font-semibold  text-lg uppercase">Region : </span>
                        {state.region}
                    </p>
                    <p className="text-lg font-medium">
                        <span className="font-semibold text-lg uppercase">Capital : </span>
                        {state.capital ? state.capital : "---"}
                    </p>
                    <p className="text-lg font-medium">
                        <span className="font-semibold  text-lg uppercase">TimeZones : </span>
                        {state.timezones[0]}
                    </p>

                    <p className="text-lg font-medium">
                        <span className="font-semibold  text-lg uppercase">
                            Population :{" "}
                        </span>
                        {state.population.toLocaleString()}
                    </p>
                    <div className="flex flex-col items-start gap-4 uppercase font-normal text-base">
                        <a
                            href={state.maps.googleMaps}
                            target="_blank"
                            className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                        >
                            View on the google Maps
                        </a>
                        <a
                            href={state.maps.openStreetMaps}
                            target="_blank"
                            className="py-2 px-4 bg-blue-500 text-white rounded-md "
                        >
                            View on the openStreet Maps
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;
