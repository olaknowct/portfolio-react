import React from "react";

import "./certificate.styles.scss";

class CertificatePage extends React.Component {
    constructor() {
        super();

        this.state = {
            certificates: [
                {
                    cert: "AWS Cloud Practitioner",
                    imgPath: "aws-cloudprac.png",
                    link:
                        "https://www.credly.com/badges/16846ad5-61be-45aa-b952-dfe61f97893e/public_url",
                },
                {
                    cert: "AWS Solutions Architech Associate",
                    imgPath: "aws-saa.png",
                    link:
                        "https://www.credly.com/badges/e72a5921-2574-47b5-8017-8be43edf1831/public_url",
                },
                {
                    cert:
                        "The Complete Javascript Course 2021: From Zero to Expert!",
                    imgPath: "jsjonas.jpg",
                    link:
                        "https://www.udemy.com/certificate/UC-5d636661-297b-4967-b38c-9be4f98412f8/",
                },
                {
                    cert:
                        "Complete React Developer in 2021 (w/ Redux, Hooks, Graphql)",
                    imgPath: "react.jpg",
                    link:
                        "https://www.udemy.com/certificate/UC-78882aab-8b83-4ba2-a6a4-045813ace669/",
                },

                {
                    cert: "NodeJS - The Complete Guide",
                    imgPath: "maxinod.jpg",
                    link:
                        "https://www.udemy.com/certificate/UC-06a1c03d-4b5b-4df6-87a8-0dfe0b8c58df/",
                },
            ],
        };
    }

    render() {
        const certificates = this.state.certificates;
        return (
            <div className="certificates fade-in">
                {certificates.map((certificate) => (
                    <div class="certificate">
                        <img src={`./img/certificate/${certificate.imgPath}`} />
                        <span>{certificate.cert}</span>
                        <p>
                            <a href={certificate.link} target="_blank">
                                <strong>
                                    <em>Click Here for validation</em>
                                </strong>
                            </a>
                        </p>
                    </div>
                ))}
            </div>
        );
    }
}
export default CertificatePage;
