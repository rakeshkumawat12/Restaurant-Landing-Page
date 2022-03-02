import React from 'react';
import './Cakes.css';
import { cakes } from '../../data/menu';

const Cakes = ({ id }) => {
    return (
        <div className="cakeContainer" id={id}>
            <h1 className="cakeHeading">Most popular</h1>
            <div className="cakeWrapper">
                {cakes.map((cake, index) => (
                    <div>
                        <div className="cakeCard">
                            <img src={cake.img} className="cakeImg" alt={cake.alt} />
                            <div className="cakeInfo">
                                <div className="protTitle">{cake.title}</div>
                                <div className="protDesc">{cake.desc}</div>
                                <div className="cakePrice">{cake.price}</div>
                                <button className="cakeBtn">Select</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cakes;