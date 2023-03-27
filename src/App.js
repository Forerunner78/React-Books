import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AddBooks from "./containers/AddBooks";

function App() {
    return (
        <div className="App">
            <NavBar />
            <AddBooks />
            <Footer />
        </div>
    );
}

export default App;
