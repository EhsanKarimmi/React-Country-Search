import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

function App() {
    return (
        <div className="header">
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={<Home />} />
                    <Route path="/details" Component={<Details />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
