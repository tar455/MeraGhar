import React from 'react';
import Header2 from "../template/header2";
import Footer from "../template/footer";



export default function Login(){
    // const pass=document.getElementById('exampleInputPassword1');
    // checkbox1 = () =>{
    //     if(pass.type==="password")
    //     {
    //         pass.type="text";
    //     }
    //     else{
    //         pass.type="password";
    //     }
    // }
    return(
        <div>
        <div>
            <Header2/>
        </div>
        <div>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-10 col-12 mx-auto">
                    <form className="form-login">
                        <div className="form-group">
                            <label >Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                        </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                    <label className="form-check-label">Show password</label>
                         </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <div className="form-row">
                                <div className="fb-login-button" data-width="" data-size="large" data-button-type="continue_with"
                                 data-layout="default" data-auto-logout-link="false" data-use-continue-as="false">  
                                </div>
                                </div>
                                
                    </form>
                    If don't have any account Please <a href="/signup">signup</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer">
            <Footer/>
        </div>
        </div>

    );
}



