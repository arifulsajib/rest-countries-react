import React from 'react';
import "./Country.css";

const country = (props) => {
    const {name, capital, flag, population, region} = props.country;
    return (
        <div className="country">
            <img src={flag} alt="" />
            <h2>{name}</h2>
            <h4>Capital: {capital}</h4>
            <h4>Region: {region}, Population: {population}</h4>
        </div>
    );
};

export default country;