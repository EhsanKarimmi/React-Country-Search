import { useState } from "react";
import { BiWorld } from "react-icons/bi";

function Navbar() {
    const [mode, setMode] = useState(true);

    const toggleDarkMode = () => {
        if (mode) {
            document.documentElement.classList.add("dark");
            setMode(!mode);
        } else {
            document.documentElement.classList.remove("dark");
            setMode(!mode);
        }
    };

    return (
        <div className="bg-gray-500 flex items-center justify-between py-3 px-5 shadow-md rounded-md ">
            <div className="flex justify-center items-center gap-2">
                <BiWorld className="text-4xl" />
                <p className="uppercase">Country Searcher</p>
            </div>
            <button onClick={() => toggleDarkMode()}>{mode ? "Dark" : "Light"}</button>
        </div>
    );
}

export default Navbar;
