import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import Loading from "../components/Loading";

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
                // Sort Data By Country Name.
                const sortedData = data.sort((countryOne, countryTwo) => {
                    if (countryOne.name.common < countryTwo.name.common) {
                        return -1;
                    }
                });
                // Save Sorted Data In State.
                setCountries(sortedData);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        // Container.
        <div className={loading ? `mt-2 h-[90%] flex justify-center items-center` : `mt-2`}>
            {/* Show Country Or Loading During Fetch Data */}
            {loading ? (
                <Loading />
            ) : (
                <>
                    {/* SearchBar */}
                    <div className="flex justify-center items-center mt-5">
                        <input
                            type="text"
                            className="bg-gray-300 dark:bg-gray-700 placeholder-gray-600 dark:placeholder-gray-400 text-black dark:text-white outline-none rounded-lg py-3 px-4 w-1/4 font-medium"
                            placeholder="Search For A Country..."
                            onChange={(event) => setSearch(event.target.value)}
                            autoFocus
                        />
                    </div>
                    <div className="grid grid-cols-6 gap-4 mt-10">
                        {filterCountries.map((country) => {
                            return (
                                <Link key={country.name.common} to="/details" state={country}>
                                    <CountryCard country={country} />
                                </Link>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;
