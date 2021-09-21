import React from "react";
import Content from "../components/Home/Content";
import Content1 from "../components/Home/Content1";
import Content2 from "../components/Home/Content2";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import Table from "../components/Home/Table";
import "../sass/style.css"

function HomePage() {
    return (
        <div className="Homepage">
            <Header></Header>
            <Table />
            <Content />
            <Content1 />
            <Content2 />


            <Footer />

        </div>
    );
}

export default HomePage;