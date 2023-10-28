import './navbar.css'

function Navbar () {
    return(
        <>
            <header className="header">
                <a href="index.html #home" className="logo"> <i className="fas fa-heartbeat"></i> The Doctors Inc. </a>

                <nav className="navbar">
                    <a href="#home">
                        <span>Home</span>
                    </a>
                    <a href="#services">
                        <span>Services</span>
                    </a>
                    <a href="#about">
                        <span>About Us</span>
                    </a>
                    <a href="#doctors">
                        <span>Doctors</span>
                    </a>
                    <a href="#book">
                        <span>Book</span>
                    </a>
                    <a href="#review">
                        <span>Review</span>
                    </a>
                    <a href="#news">
                        <span>News</span>
                    </a>
                </nav>

                <div id="menu-btn" className="fas fa-bars"></div>

            </header>
        </>
    )
}

export default Navbar