import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <h1>S3 Demo App</h1>
            <div className = "links">
                <Link to = "/">Home</Link>
                <Link to = "/projects">Projects</Link>
                <Link to = "/about">About</Link>
            </div>
        </nav>
    )
}
