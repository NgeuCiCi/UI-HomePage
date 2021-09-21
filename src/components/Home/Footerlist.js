import React from 'react';

function Footerlist(props) {
    const list = props.list;
    const listItems = list.map((list, index) =>
        <li key={index}>{list}</li>
    );

    return (
        <ul className="footer-list">
            {listItems}
        </ul>
    );
}

export default Footerlist;