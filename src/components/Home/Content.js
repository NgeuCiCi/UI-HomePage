import React from 'react';
import Destination from './Destination';


function Content(props) {

    const destinations = [
        {
            "id": 1,
            "num": 730,
            "Destination": 'Figueira da Foz',
            "country": 'Portgal',
            "img": 'https://pix10.agoda.net/geo/city/18692/1_18692_04.jpg?s=1920x822'

        },
        {
            "id": 2,
            "num": 621,
            "Destination": 'lbiza',
            "country": 'Spain',
            "img": 'https://static01.nyt.com/images/2021/08/05/lens/05virus-briefing-ibiza/05virus-briefing-ibiza-videoSixteenByNineJumbo1600.jpg'
        },
        {
            "id": 3,
            "num": 543,
            "Destination": 'Palma de Mallorca',
            "country": 'Spain',
            "img": 'https://thumbs.dreamstime.com/b/cathedral-santa-maria-palma-la-seu-royal-palace-la-almudaina-night-palma-de-mallorca-spain-cathedral-santa-135181734.jpg'
        },
        {
            "id": 4,
            "num": 495,
            "Destination": 'Portofino',
            "country": 'Italy',
            "img": 'https://vnluxury.vn/upload/1/du-lich-am-thuc/2018/t11/23/18283-portofino-collection-inspiration-1.jpg'
        },
        {
            "id": 5,
            "num": 402,
            "Destination": 'Port Hercules',
            "country": 'Monaco',
            "img": 'https://photo-assets.superyachttimes.com/photo/48049/image/large-1466278570652658987b05948c58795a.jpg'
        },



    ]
    return (
        <div className="content" id="content">
            <div className="content-title">
                <p className="content-title-a"> EXPLORE OUR TOP DESTINATIONS</p>
                <p className="content-title-b"> Lorem ipsum sit amet, consectetur adipisicing elit, sed do elusmod tempor
                    incididunt ur labore et
                </p>
            </div>
            <div className="content-destination" >
                <Destination destinations={destinations} />


            </div>
            <div className="content-btn">
                <button className="content-btn-a" >EXPLORE MORE DESTINATIONS</button>
            </div>

        </div>
    );
}

export default Content;
