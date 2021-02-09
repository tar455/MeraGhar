import React,{useEffect, useState} from "react";
import Header from "../template/header";
import Footer from "../template/footer";
import Product from "./Product";
// import SideBar from "../template/sideBar";
export default function HomeScreen(){
    return (
        <div>
        <div>
        <Header/>
        <Product/>
        </div>
        <div className="footer">
        <Footer/>
        </div>  
        </div>
    );

}
