import React from "react";
import { withRouter } from "react-router-dom";
// import SideBar from "./sideBar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const query = this.state.searchTerm.trim();

    if (query) {
      history.push(`/product?search=${encodeURIComponent(query)}`);
    } else {
      history.push("/product");
    }
  };

  render() {
    return (
      <div className="container-fluid main_menu">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <a className="navbar-brand" href="/">SubKaGhar<span className="dom">.online</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/product">Product</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/about">About</a>
                    </li>
                  </ul>
                  <div className="main-header-Left">
                    <form className="d-flex" onSubmit={this.handleSubmit}>
                      <a className="nav-link" href="/">
                        <i className="fas fa-map-marker-alt me-2"></i>
                      </a>
                      <input
                        className="form-control me-2"
                        type="search"
                        id="searchInp"
                        placeholder="Search products or brands"
                        aria-label="Search"
                        value={this.state.searchTerm}
                        onChange={this.handleInputChange}
                      />
                      <button className="btn me-2" type="submit" id="searchBtn" autoComplete="true">
                        Search
                      </button>
                      <a href="login-signup"><button className="btn me-2" type="button">Login</button></a>
                      <a className="nav-link" href="/cart"><i className="fas fa-shopping-cart"></i></a>
                    </form>
                  </div>
                </div>
              </div>
            </nav>
            {/* <SideBar/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);