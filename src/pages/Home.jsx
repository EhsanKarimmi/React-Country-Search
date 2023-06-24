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
                setCountries(data);
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
                    <div className=" mt-4  flex justify-center items-center bg-green-500">
                        <input
                            type="text"
                            className="bg-gray-600 dark:bg-gray-900  outline-none rounded-xl "
                            placeholder="Search For A Country..."
                            onChange={(event) => setSearch(event.target.value)}
                        />
                    </div>
                    {filterCountries.map((country, index) => {
                        return (
                            <Link key={index}>
                                <CountryCard country={country} />
                            </Link>
                        );
                    })}
                </>
            )}
        </div>
    );
}

export default Home;
