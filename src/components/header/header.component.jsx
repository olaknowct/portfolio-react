import React from "react";
import "./header.styles.scss";

const Header = () => {
    return (
        <div className="header-nav">
            <a href="#">
                <img className="nav-img fb" src="./img/facebook.png" alt="" />
            </a>
            <a href="#">
                <img className="nav-img github" src="./img/github.png" alt="" />
            </a>
            <a href="#">
                <img className="nav-img twtr" src="./img/twitter.png" alt="" />
            </a>
            <a href="#">
                <img className="nav-img ig" src="./img/instagram.png" alt="" />
            </a>
            <a href="#">
                <img className="nav-img lkn" src="./img/linkedin.png" alt="" />
            </a>
        </div>
    );
};
export default Header;
