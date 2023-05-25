import bag from "../../assets/icons/bag.svg";
import logo from "../../assets/icons/logo.svg";
import flag from "../../assets/icons/flag.png";
import bell from "../../assets/icons/bell.png";

import "./Nav.scss";

export const Nav = () => {
    return (
        <nav className="nav">
            <div className="nav__logo-container">
                <img src={bag} />
                <img className="nav__logo" src={logo} />
            </div>
            <div className="nav__search-container">
                <input type="text" id="search" placeholder="Search" />
            </div>
            <div className="nav__user">
                <img className="nav__flag" src={flag} alt="Setup Guide" />
                <p>Setup Guide</p>
                <img className="nav__bell" src={bell} alt="Alerts" />
                <div className="nav__user-profile">
                    <p>UN</p>
                </div>
                <p className="nav__user-name">User Name</p>
            </div>
        </nav>
    );
};
