import React from "react";

import { AboutMe, Contact, Resume, Works } from "../../pages";
import Info from "../about/Info";
import Footer from "./Footer";
import Header from "./Header";
import "./layout.scss";

export const Layout: React.FC<any> = () => {
  return (
    <div className="layout-wrapper">
      <div className="layout container">
        <div className="top-header">
          <img
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            loading="lazy"
          />
        </div>
        <div className="info">
          <Info />
        </div>
        <div className="content-wrapper">
          
          <AboutMe />
          <Resume />
          <Works />
          <Contact />
          
          <Footer />
        </div>
        <Header />
      </div>
    </div>
  );
};

export default Layout;
