import React from "react";
import "./about.styles.scss";
import Typed from "react-typed";

const AboutPage = () => {
    return (
        <div className="about">
            <div className="image-container">
                <img className="fade-in" src="./img/chris.jpg" alt="" />
            </div>
            <div className="description">
                <Typed
                    strings={["Hey, Hi! You can call me Chris ..."]}
                    typeSpeed={50}
                    backSpeed={50}
                />
                <Typed
                    strings={[
                        "<p>An engineer who is passionate about <span class='about-me_dev'>DE</span>aling with complex problems involving technology.</p>",
                    ]}
                    startDelay={4000}
                    typeSpeed={30}
                    backSpeed={50}
                    showCursor={false}
                />
                <Typed
                    strings={[
                        "I've become addicted learning new technology, this helps me understand what i'm capable of.",
                    ]}
                    startDelay={9000}
                    typeSpeed={30}
                    backSpeed={50}
                    showCursor={false}
                />
                <Typed
                    strings={[
                        "<p>Now, I continously progressively in<span class='about-me_dev'>VE</span>sting in myself, knowing what to know, <span class='about-me_dev'>LO</span>ving what i do, doing what i think will help me grow over time and most importantly <span class='about-me_dev'>PER</span>severe despite of all obstacle.</p>",
                    ]}
                    startDelay={14000}
                    typeSpeed={30}
                    backSpeed={50}
                    showCursor={false}
                />
            </div>
        </div>
    );
};
export default AboutPage;
