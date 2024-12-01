import React from "react";

export const Jumbotron = () => {
    const textTittle = "A Warm Welcome!"
    const textP = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    const textButton = "Call to action!"

    return (

        <div className="text-start mt-4 p-5 text-muted bg-light ">
            <h1 className="text-body-emphasis ">{textTittle}</h1>
            <p className="text-start mb-4 me-0">
                {textP}
            </p>
            <button className="btn btn-primary px-5 mb-5" type="button">
                {textButton}
            </button>
        </div>

    );
};