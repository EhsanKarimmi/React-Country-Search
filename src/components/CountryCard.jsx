import React from "react";

function CountryCard({ country }) {
    return (
        <div className="bg-gray-300 dark:bg-gray-700 rounded-md hover:shadow-cardShadowLight dark:hover:shadow-cardShadowDark transition-all duration-300 ">
            {/* Country Flag */}
            <div className=" p-1 ">
                <img src={country.flags.png} alt="" className=" w-full h-36 rounded-md" />
            </div>
            {/* Country Title */}
            <div className="p-1 h-28 text-center dark:text-gray-200">
                <hr className=" border-2 border-gray-400 dark:border-gray-950 rounded-full" />
                <p className="uppercase font-bold text-base mt-3">{country.name.common}</p>
                <p className="uppercase font-medium text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Capital : {country.capital}
                </p>
            </div>
        </div>
    );
}

export default CountryCard;
