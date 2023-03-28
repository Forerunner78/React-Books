import { useState } from "react";
import { connect } from "react-redux";
import { addBook } from "../redux/actions/actionAddBooks";
import { deleteBook } from "../redux/actions/actionAddBooks";
import FlipMove from "react-flip-move";

const AddBooks = ({ libraryData, addBook, deleteBook }) => {
    const initialState = { title: "", author: "" };
    const [newData, setNewData] = useState(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        addBook(newData);

        // Vider le input
        setNewData(initialState);
    };

    const displayData =
        libraryData.length > 0 ? (
            <FlipMove>
                {libraryData.map((data) => {
                    return (
                        <li
                            key={data.id}
                            className="list-group-item list-group-item-light d-flex justify-content-between"
                        >
                            <span>
                                <strong>Titre: </strong>
                                {data.title}
                            </span>
                            <span>
                                <strong>Auteur: </strong>
                                {data.author}
                            </span>
                            <span className="btn btn-danger" onClick={() => deleteBook(data.id)}>
                                X
                            </span>
                        </li>
                    );
                })}
            </FlipMove>
        ) : (
            <p className="text-center">Aucune data a afficher</p>
        );

    const deleteAllBooksBtn = libraryData.length > 0 && (
        <div className="d-flex justify-content-center m-5">
            <button className="btn btn-danger">Effacer tous les livres</button>
        </div>
    );

    return (
        <main role="main">
            <div className="jumbotron jumbotron-fluid bg-light m-5">
                <div className="container text-center p-5">
                    <h1 className="display-4">BOOKS</h1>
                    <p>Ajouter un livre à votre bibliothèque</p>
                    <form className="row g-3 justify-content-center" onSubmit={handleSubmit}>
                        <div className="col-auto">
                            <input
                                value={newData.title}
                                type="text"
                                className="form-control"
                                placeholder="Titre"
                                required
                                onChange={(e) => setNewData({ ...newData, title: e.target.value })}
                            />
                        </div>
                        <div className="col-auto">
                            <input
                                value={newData.author}
                                type="text"
                                className="form-control ml-3"
                                placeholder="Auteur"
                                required
                                onChange={(e) => setNewData({ ...newData, author: e.target.value })}
                            />
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-outline-secondary ml-3">
                                Ajouter un livre
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container" style={{ minHeight: "200px" }}>
                <div className="row">
                    <div className="col-md-12">
                        <ul className="list-group">{displayData}</ul>
                    </div>
                    {deleteAllBooksBtn}
                </div>
            </div>
        </main>
    );
};

const addStateToProps = (state) => {
    return {
        libraryData: state.library,
    };
};

const addDispatchToProps = (dispatch) => {
    return {
        addBook: (param) => dispatch(addBook(param)),
        deleteBook: (id) => dispatch(deleteBook(id)),
    };
};

export default connect(addStateToProps, addDispatchToProps)(AddBooks);
