import React, { useEffect } from "react";
import "./section.styles.scss";
import { Link } from "react-router-dom";

const Section = () => {
    React.useEffect(() => {
        const sectionClass = window.document.querySelector(".sections");
        const handleHover = function (e) {
            console.log(e.target);
            if (e.target.classList.contains("section")) {
                const link = e.target;
                const siblings = link
                    .closest(".sections")
                    .querySelectorAll(".section");

                siblings.forEach((el) => {
                    if (el !== link) el.style.opacity = this;
                });
            }
        };

        sectionClass.addEventListener("mouseover", handleHover.bind(0.5));
        sectionClass.addEventListener("mouseout", handleHover.bind(1));

        // window.addEventListener("keydown", (event) => {
        //     console.log("tada");
        // });
    });
    return (
        <div className="sections">
            <Link className="section" to="/">
                Portfolio
            </Link>
            <Link className="section" to="/">
                About
            </Link>
            <Link className="section" to="/">
                Skills
            </Link>
            <Link className="section" to="/">
                Certificate
            </Link>
        </div>
    );
};

export default Section;
