import React from "react";
import "./tools.styles.scss";

class ToolsPage extends React.Component {
    constructor() {
        super();

        this.state = {
            tools: [
                "javascript",
                "react",
                "redux",
                "sass",
                "Jest",
                "jquery",
                "nodejs",
                "expressjs",
                "git",
                "php",
                "laravel",
                "Codeigniter",
                "mysql",
                "phpmyadmin",
                "boostrap",
                "gitlab",
                "heroku",
                "HTMLCSS",
                "firebase",
                "aws",
                "mongodb",
                "godaddy",
                "cpannel",
                "postman",
                "netlify",
                "liquidweb",
                "vscode",
            ],
        };
    }
    render() {
        const tools = this.state.tools;

        return (
            <div className="tools fade-in">
                {tools.map((tool) => (
                    <div class="tool">
                        <img src={`./img/tools/${tool}.png`} />
                        <span>{tool}</span>
                    </div>
                ))}
            </div>
        );
    }
}

export default ToolsPage;
