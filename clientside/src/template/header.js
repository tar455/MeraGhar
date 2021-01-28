import React from "react";


class Header extends React.Component {
        render(){
        return (
            <div className="container-fluid main_menu">
  <div className="row">
    <div className="col-md-10 col-12 mx-auto">
      <nav className="navbar navbar-expand-lg"> 
  <div className="container-fluid">
    <a className="navbar-brand" href="/">MeraGhar<span className="dom">.online</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/index">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/product">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        
        
      </ul>
      <div className="main-header-Left">
      <form className="d-flex">
        <a className="nav-link" href="/">
        <i className="fas fa-map-marker-alt me-2"></i>
        </a>
        <input className="form-control me-2" type="search" placeholder="Search Your Location"  aria-label="Search"/>
        <button className="btn me-2" type="submit">Search</button>
        <a href="login-signup"><button className="btn me-2" type="button">Login</button></a>
        <a className="nav-link" href="/cart"><i className="fas fa-shopping-cart"></i></a>
    </form>
                </div>
            </div>
        </div>
        </nav>
    </div>
  </div>
</div> 
        );
    }
}
export default Header;