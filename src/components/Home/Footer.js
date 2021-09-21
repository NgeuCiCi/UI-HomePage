import React from 'react';
import Footerlist from './Footerlist';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

import { CgFacebook } from 'react-icons/cg';
import { FaDove } from 'react-icons/fa';

import { AiOutlineGooglePlus } from 'react-icons/ai';

var list1 = [
    'TOP LOCATIONS',
    'Lorem ipsum dolor',
    'Sit amet consectur',
    'Adipisicing',
    'Eslusmod tempor',
    'Incididunt ut labore',
]
var list2 = [
    'FEATURED BOATS',
    'Lorem ipsum dolor',
    'Sit amet consectur',
    'Adipisicing',
    'Eslusmod tempor',

]
var list4 = [
    'CONTACT US',
    'Lorem ipsum dolor',
    'Sit amet consectur',
    'Adipisicing',
    'Eslusmod tempor',
    'Incididunt ut labore',

]
function Footer(props) {
    return (
        <div className="footer">
            <Footerlist list={list1} />
            <Footerlist list={list2} />
            <div className="footer-list3">
                <p style={{ fontWeight: 500, margin: 0, paddingTop: 5, paddingBottom: 10 }}> SUBSCRIBE TO OUR NEWSLETTER</p>

                <InputGroup style={{ width: 400, height: 44, paddingTop: 5 }}>
                    <Input placeholder="Your email adress" />
                    <InputGroupAddon addonType="append">
                        <Button style={{
                            backgroundColor: "#e05353", display: "flex", alignItems: "center",
                            height: 45, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, outlineStyle: "none"
                        }} > SUBSCRIBE</Button>
                    </InputGroupAddon>
                </InputGroup>

                <div className="footer-list3-icon">
                    <div className="footer-list3-icon-a">
                        <CgFacebook />
                    </div>
                    <div className="footer-list3-icon-a">
                        <FaDove />
                    </div>
                    <div className="footer-list3-icon-a">
                        <AiOutlineGooglePlus />
                    </div>
                </div>
            </div>
            <Footerlist list={list4} />

        </div>
    );
}

export default Footer;