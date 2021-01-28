// import { render } from "react-dom";
import React from "react";
import Header from "./template/header";
import  Footer from "./template/footer";
class App extends React.Component {
    render(){
        
        return( 
            <div>
            <div>
                <Header/>
                
            </div>
            <div className="footer">
                <Footer/>
            </div>
            </div>
        );

    }
}
export default App;