import React from 'react';

import Boats from './Boats';


function Content2(props) {

    const boats = [
        {
            "id": 1,
            "num": '580 / day',
            "boat": 'Delphia 47',
            "country": 'Gdansk, Poland',
            "berth": '8 Berths',
            "img": 'https://www.yachtic.com/multimedia/706802_c_1200_630_1.JPG'

        },
        {
            "id": 2,
            "num": '950 / day',
            "boat": 'Sense 55',
            "country": 'Portofino, Italy',
            "berth": '12 Berths',
            "img": 'https://itboat.com/uploads/8097/6b0ce9967dfc.jpg'
        },
        {
            "id": 3,
            "num": '820 / day',
            "boat": 'Crusier 51',
            "country": 'Plama de Mallorca, Spain',
            "berth": '10 Berths',
            "img": 'https://itboat.com/uploads/a861/c06237f90cc9.jpg'
        },
        {
            "id": 4,
            "num": '400 / day',
            "boat": 'Crusier 41S',
            "country": 'Lisbon, Portugal',
            "berth": '8 Berths',
            "img": 'https://www.bavaria-yacht-charter.com/content/uploads/2017/03/bavaria-cruiser-c41s.jpg'
        },

    ]

    return (
        <div className="content" id="content2">
            <div className="content-title">
                <p className="content-title-a"> FEATURED BOATS</p>
                <p className="content-title-b"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod
                </p>
            </div>
            <div className="content-destination" >
                <Boats boats={boats} />

            </div>
            <div className="content-btn">
                <button className="content-btn-a" >LOAD MORE BOATS</button>
            </div>

        </div>
    );
}

export default Content2;
