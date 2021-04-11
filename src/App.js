import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./pages/about/about.component";
import PortfolioPage from "./pages/portfolio/portfolio.component";
import ToolsPage from "./pages/tools/tools.component";
import CertificatePage from "./pages/certificate/certificate.component";

import Header from "./components/header/header.component";
import Heading from "./components/heading/heading.component";
import Section from "./components/section/section.component";

const App = () => {
    return (
        <div>
            <Header />
            <Heading />
            <Section />
            <Switch>
                <Route exact path="/" component={AboutPage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/portfolio" component={PortfolioPage} />
                <Route exact path="/tools" component={ToolsPage} />
                <Route exact path="/certificate" component={CertificatePage} />
            </Switch>
        </div>
    );
};
export default App;
