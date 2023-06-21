import { useState } from "react";
import worldIcon from "../assets/world.svg";
import { Link } from "react-router-dom";
import { RiSunFill, RiMoonClearFill } from "react-icons/ri";

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);

    // Change state and add 'dark:' class.
    const toggleDarkMode = () => {
        if (!darkMode) {
            document.documentElement.classList.add("dark");
            setDarkMode(!darkMode);
        } else {
            document.documentElement.classList.remove("dark");
            setDarkMode(!darkMode);
        }
    };

    return (
        // Navbar Container.
        <div className="bg-[#42C2FF] flex items-center justify-between py-3 px-5 shadow-md rounded-md ">
            {/* Title and Icon */}
            <Link to="/">
                <div className="flex justify-center items-center gap-2  cursor-pointer">
                    <img src={worldIcon} alt="World Icon" className="w-10" />
                    <p className="uppercase text-lg font-semibold text-gray-800">
                        Country Searcher
                    </p>
                </div>
            </Link>
            {/* DarkMode Toggler */}
            <button
                onClick={() => toggleDarkMode()}
                className="text-2xl bg-blue-200 p-2 rounded-full"
            >
                {darkMode ? (
                    <RiSunFill className="text-yellow-500" />
                ) : (
                    <RiMoonClearFill className="text-gray-500" />
                )}
            </button>
        </div>
    );
}

export default Navbar;
