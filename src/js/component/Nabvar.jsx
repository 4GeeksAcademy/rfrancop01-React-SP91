import React from "react";

export const Nabvar = () => {

    const tittle = "Start Bootstrap"
    return (

        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand ms-3" href="#">{tittle}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarColor01">
                    <ul className="navbar-nav me-4 mb-2 mb-lg-0 position-absolute top-0 end-0">
                        <li className="nav-link">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-link">
                            <a className="nav-link active" href="#">About</a>
                        </li>
                        <li className="nav-link active">
                            <a className="nav-link active" href="#">Service</a>
                        </li>
                        <li className="nav-link active">
                            <a className="nav-link active" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}