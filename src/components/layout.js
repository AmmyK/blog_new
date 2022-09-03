import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import "../styles/layout.css"


const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header />

            <main>{children}</main>

            <Footer />
            
        </div>
    )
}

export default Layout