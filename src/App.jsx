import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

import Navbar from "./components/Navbar";

function App() {
    return (
        <main className="bg-gray-100 dark:bg-gray-800 p-2">
            <HashRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="details" element={<Details />} />
                </Routes>
            </HashRouter>
        </main>
    );
}

export default App;
