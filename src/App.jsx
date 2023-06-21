import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Page404 from "./pages/Page404";
import Navbar from "./components/Navbar";

function App() {
    return (
        <main className="w-screen h-screen bg-gray-100 dark:bg-gray-800 p-2">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="details" element={<Details />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </main>
    );
}

export default App;
