import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddBooks from "./containers/AddBooks";
import SearchBooks from "./containers/SearchBooks";
import Error from "./components/Error";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route exact path="/" element={<AddBooks />} />
                <Route path="/search" element={<SearchBooks />} />
                <Route path="*" element={<Error />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
