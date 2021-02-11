import React from "react";
import Footer from "../template/footer";
import Header from "../template/header";
export default function Cart(){
    return(
        <div>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <h3>About</h3>

                    </div>
                    <div> 
                        <img src="/images/Favicon.jpg" alt="Hello" style={{width: '30%', height: '100%'}}/>
                    </div>
                    <div className="col-sm-7">
                        <p>Welcome to MeraGhar!!!!</p>
                        <p>
                            India's No one Leading company which built infrastructure and Your home with some Easy Process.
                            Join With MeraGhar and make your Dream House With your monthly income. 
                        </p>
                    </div>
                </div>
            </div>
        <div className="footer">
            <Footer/>
        </div>
        </div>
    );
}