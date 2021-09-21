import React from 'react';
import "../../sass/style.css"
import { RiSailboatFill } from 'react-icons/ri';

function Destination(props) {

    var destinations = props.destinations;


    return (
        destinations.map((destination) =>


            <div key={destination.id}
                id={
                    destination.Destination === 'Figueira da Foz' ? 'a' : ''
                }
                style={{ backgroundImage: `url(${destination.img})` }} className="destinations">
                <button className="destinations-btn" ><RiSailboatFill /> {destination.num}</button>
                <p className="destinations-dest">{destination.Destination} </p>
                <p className="destinations-country">{destination.country} </p>
            </div>
        )
    );
}

export default Destination;