import React from "react";
import "./heading.styles.scss";
import Typed from "react-typed";

const Heading = () => {
    return (
        <div className="heading">
            <Typed
                className="heading-typed"
                strings={["CHRISTOPHER OLANO"]}
                typeSpeed={10}
                showCursor={false}
            />

            <Typed
                className="heading-typed sub"
                strings={[
                    "Software Engineer",
                    "Full Stack Developer",
                    "Product Specialist",
                    "RF Engineer",
                    "Electronics Engineer",
                    "Eletronics Technician",
                ]}
                typeSpeed={70}
                backSpeed={50}
                showCursor={false}
                // attr="placeholder"
                loop
            ></Typed>
        </div>
    );
};
export default Heading;
