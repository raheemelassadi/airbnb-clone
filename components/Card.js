import React from "react";

export default function Card({img, rating, reviewCount, country, title, price}){
    return(

        // <section className="cards">
        <div className="card">
            <img src={`./images/${img}`} className="card-img"/>
            <div className="card-stats">
                <img src="./images/star.png" className="star-img"/>
                <span className="">{rating}</span>
                <span className="gray">({reviewCount}) •</span>
                <span className="gray">{country}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>    
        // </section>
    )
}