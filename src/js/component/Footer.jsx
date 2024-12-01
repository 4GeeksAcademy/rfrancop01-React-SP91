import React from "react";

export const Footer = () => {
    const textFooter = "Copyright © Your Website 2019"

    return (
        <footer className="bg-dark d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top" data-bs-theme="dark">
            <p className="col-md-4 mb-0 text-body-secondary">{textFooter}</p>
        </footer>
    );

};
