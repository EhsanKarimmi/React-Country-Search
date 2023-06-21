import { useEffect, useState } from "react";
import { BiWorld } from "react-icons/bi";

function Home() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    // Filter Countries by User Search.
    const filterCountries = countries.filter((country) => {
        return country.name.official.toLowerCase().includes(search.toLowerCase());
    });

    // Fetching Data.
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="bg-gray-100 dark:bg-gray-800 ">
            {/* Container */}
            <div className=" mt-2">
                {/* SearchBar */}
                <div className=" mt-4  w-screen flex justify-center items-center bg-green-500">
                    <input
                        type="text"
                        className="bg-gray-600 dark:bg-gray-900 p-3 outline-none rounded-xl w-1/4"
                        placeholder="Search For A Country..."
                        onChange={(event) => setSearch(event.target.value)}
                    />
                </div>
                {/* Show Country Or Loading During Fetch Data */}
                {loading ? (
                    <div>loading...</div>
                ) : (
                    <>
                        {filterCountries.map((country, index) => {
                            return (
                                <div key={index} className="bg-red-400 m-1">
                                    <p>{country.name.official}</p>
                                    <p>{country.capital}</p>

                                    <p>{country.region}</p>
                                    <p>{country.name.official}</p>
                                    <img src={country.flags.png} alt="" />
                                </div>
                            );
                        })}
                    </>
                )}
            </div>
        </div>
    );
}

export default Home;
