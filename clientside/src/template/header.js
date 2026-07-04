import React from "react";
import { withRouter } from "react-router-dom";
// import SideBar from "./sideBar";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      locationLabel: "Detecting location...",
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
              {
                headers: { "Accept-Language": "en" },
              }
            );
            const data = await response.json();
            const address = data.address || {};
            const city = address.city || address.town || address.village || address.county;
            const state = address.state || address.region;
            const label = city && state ? `${city}, ${state}` : "Location unavailable";
            this.setState({ locationLabel: label });
          } catch (error) {
            this.setState({ locationLabel: "Location unavailable" });
          }
        },
        () => {
          this.setState({ locationLabel: "Location unavailable" });
        },
        {
          enableHighAccuracy: true,
          timeout: 8000,
          maximumAge: 60000,
        }
      );
    } else {
      this.setState({ locationLabel: "Geolocation not supported" });
    }
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
                      <span className="location-text">{this.state.locationLabel}</span>
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