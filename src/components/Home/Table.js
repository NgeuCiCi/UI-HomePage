import React from "react";
import "../../sass/style.css"

function Table() {
    const info = [
        {
            "id": 1,
            "num": 2300,
            "title": 'Destinations'
        },
        {
            "id": 2,
            "num": 1000,
            "title": 'Cities'
        },
        {
            "id": 3,
            "num": 35000,
            "title": "Boats"
        },
        {
            "id": 4,
            "num": 50000,
            "title": "Sailors"
        },

    ];
    return (


        <div className="Table">
            <div className="Table-content" >
                {
                    info.map((info) => (
                        <div className="Table-content-flex" key={info.id}>
                            <b className="Table-content-flex-num">{info.num} </b>
                            <p className="Table-content-flex-title">{info.title} </p>
                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default Table;