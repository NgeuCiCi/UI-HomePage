import React from 'react';
import { BiEuro } from 'react-icons/bi';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillPeopleFill } from 'react-icons/bs';


function Boats(props) {
    var boats = props.boats;


    return (
        boats.map((boat) =>

            <div key={boat.id} className="boat"
            //  style={{ backgroundImage: `url(${boat.img})` }}
            >
                <img src={boat.img} alt="" />
                <div className="boat-overlay">
                    <button className="boat-overlay-btn"> Add</button>
                    <button className="boat-overlay-btn"> More</button>

                </div>
                <button className="boat-btn"> <BiEuro />{boat.num}</button>
                <p className="boat-boatname" >{boat.boat}</p>
                <div className="boat-detail" >
                    <p >  <HiLocationMarker style={{ marginRight: 5 }} />{boat.country} </p>
                    <p> <BsFillPeopleFill style={{ marginRight: 5 }} /> {boat.berth} </p>

                </div>

            </div>
        )
    );
}

export default Boats;