import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className='container'>
            <footer class="py-3 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link></li>
                    <li class="nav-item"><Link to="/facilities" class="nav-link px-2 text-muted">Facilities</Link></li>
                    <li class="nav-item"><Link to="/about" class="nav-link px-2 text-muted">About</Link></li>
                    <li class="nav-item"><Link to="#" class="nav-link px-2 text-muted">FAQs</Link></li>
                    <li class="nav-item"><Link to="/contact-us" class="nav-link px-2 text-muted">Contact us</Link></li>
                </ul>
                <p class="text-center text-muted">© 2023 Abhishek Hotel, developed by Abhishek Sonawane</p>
            </footer>
        </div>
    )
}

export default Footer;