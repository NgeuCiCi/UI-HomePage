import React from "react";
import "../../sass/style.css"
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { RiSailboatFill } from 'react-icons/ri';


function Header() {
    return (
        <div>
            <div className="Header">
                <div className="Header-nav">
                    <div className="Header-nav-logo">
                        NaVa

                    </div>
                    <div className="Header-nav-hef">
                        <div>

                            <a href="#content">
                                <b style={{ color: "white" }}> TOP DESTINATIONS</b>
                            </a>

                        </div>
                        <div>
                            <a href="#content2">
                                <b style={{ color: "white" }}>ADD YOUR BOAT </b>
                            </a>
                        </div>
                        <button className="btnHome"><b>SIGN UP</b></button>
                    </div>
                </div>
                <div className="Header-content">
                    <div className="Header-content-n1"> <b>RESERVE A BOAT NOW</b></div>
                    <div className="Header-content-n2"> <b>AND SET YOUR SAILS INTO PARADISE</b></div>
                    <div className="Header-content-n3" >

                        <InputGroup style={{ width: 650, height: 45 }}>
                            <Input placeholder="WHAT IS YOUR DESTINATION. SAILOR?" />
                            <InputGroupAddon addonType="append">
                                <Button style={{
                                    backgroundColor: "#e05353", display: "flex", alignItems: "center",
                                    height: 45, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, outlineStyle: "none"
                                }} > <RiSailboatFill />FIND A BOAT</Button>
                            </InputGroupAddon>
                        </InputGroup>

                    </div>
                </div>


            </div>

        </div>
    );
}
export default Header;