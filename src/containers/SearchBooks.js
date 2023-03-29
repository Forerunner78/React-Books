const SearchBooks = () => {
    return (
        <main role="main">
            <div className="jumbotron jumbotron-fluid bg-light m-5">
                <div className="container text-center p-5">
                    <h1 className="display-4">BOOKS</h1>
                    <p>Indiquez le sujet du livre à rechercher sur Google API</p>
                    <form className="row g-3 justify-content-center">
                        <div className="col-auto">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Quoi rechercher ?"
                                required
                            />
                        </div>
                        <div className="col-auto">
                            <button className="btn btn-outline-secondary ml-3">rechercher</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container" style={{ minHeight: "200px" }}>
                <div className="accordion">
                    <div className="card mb-3">
                        <div className="card-header">
                            <div className="collapse" data-parent="accordion">
                                <div className="card-body"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SearchBooks;
