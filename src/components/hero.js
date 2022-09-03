import React from "react"
import "../styles/hero.css"
import IconImg from "../../static/icon.png"

export default function Hero() {
    return (
        <div className="hero">
            <h1 className="hero-text">
                Welcome to amam's Blog!<br />
                Enjoy lots of posts.<br />
            </h1>

            <div className="hero-author">
                <img src={IconImg} className="hero-author-image" alt="icon desu"></img>
                <p className="hero-author-text">
                    Written by amam.<br />
                    I'm human being. Love Swift.
                </p>
            </div>
        </div>
    )
}