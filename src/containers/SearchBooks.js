import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../redux/actions/actionFetchBooks";
import { addBook } from "../redux/actions/actionAddBooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchBooks = () => {
    const [title, setTitle] = useState("");
    const state = useSelector((state) => state.search);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchBooks(title));
    };

    const handleSave = (title, author) => {
        const bookToSave = { title, author };
        dispatch(addBook(bookToSave));
        toast.info("Livre enregistré", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const displayFetchedBooks = state.isLoading ? (
        <div className="d-flex justify-content-center">
            <div
                className="spinner-border text-info"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
            >
                <span className="sr-only"></span>
            </div>
        </div>
    ) : state.error !== "" ? (
        <p>{state.error}</p>
    ) : (
        state.fetchedBooks.map((data) => {
            return (
                <div className="card mb-3" key={data.id}>
                    <div className="card-header">
                        <h5 className="mb-0">
                            <button
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target={`#${data.id}`}
                                aria-expanded="false"
                            >
                                {data.volumeInfo.title}
                            </button>
                        </h5>
                    </div>
                    <div className="collapse" data-parent="#accordion" id={data.id}>
                        <div className="card-body">
                            {data.volumeInfo.hasOwnProperty("imageLinks") && (
                                <img
                                    src={data.volumeInfo.imageLinks.thumbnail}
                                    alt={data.volumeInfo.title}
                                />
                            )}

                            <br />
                            <h4 className="card-title">Titre: {data.volumeInfo.title}</h4>
                            <h5 className="card-title">Auteurs: {data.volumeInfo.authors}</h5>
                            <p className="card-text">Description: {data.volumeInfo.description}</p>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline-secondary me-3"
                                href={data.volumeInfo.previewLink}
                            >
                                Plus d'infos
                            </a>
                            <button
                                className="btn btn-outline-secondary"
                                onClick={() =>
                                    handleSave(data.volumeInfo.title, data.volumeInfo.authors)
                                }
                            >
                                Enregistrer
                            </button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            );
        })
    );
    return (
        <main role="main">
            <div className="jumbotron jumbotron-fluid bg-light m-5">
                <div className="container text-center p-5">
                    <h1 className="display-4">BOOKS</h1>
                    <p>Indiquez le sujet du livre à rechercher sur Google API</p>
                    <form className="row g-3 justify-content-center" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input
                                value={title}
                                type="text"
                                className="form-control"
                                placeholder="Quoi rechercher ?"
                                required
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-outline-secondary ml-3">rechercher</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container" style={{ minHeight: "200px" }}>
                <div id="accordion">{displayFetchedBooks}</div>
            </div>
        </main>
    );
};

export default SearchBooks;
