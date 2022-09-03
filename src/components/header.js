import React from "react"
import { Link } from "gatsby"
import LogoImg from "../../static/logo.png"
import "../styles/header.css"

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img src={LogoImg} className="logo-image" alt="logo"></img>
            </Link>
        </header>
    )
}