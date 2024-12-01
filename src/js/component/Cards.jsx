import React from "react";
import rigoImage from "../../img/rigo-baby.jpg"


export const Card = () => {
    const cardTitle = "Card title"
    const cardText = "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    const cardButton = "Find Out More!"
    
    return (

        <div className="card-body row row-cols-1 row-cols-md-4 g-4 mt-1 mb-4">
            <div className="col">
                <div className="card h-100">
                    <img src={rigoImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{cardTitle}</h5>
                            <p className="card-text">{cardText}</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" class="btn btn-primary">{cardButton}</a>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={rigoImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{cardTitle}</h5>
                            <p className="card-text">{cardText}</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" class="btn btn-primary">{cardButton}</a>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={rigoImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{cardTitle}</h5>
                            <p className="card-text">{cardText}</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" class="btn btn-primary">{cardButton}</a>
                        </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                    <img src={rigoImage} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{cardTitle}</h5>
                            <p className="card-text">{cardText}</p>
                        </div>
                        <div className="card-footer">
                            <a href="#" class="btn btn-primary">{cardButton}</a>
                        </div>
                </div>
            </div>
        </div>
    );
};