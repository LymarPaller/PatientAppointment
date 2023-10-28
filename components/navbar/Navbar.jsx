import './navbar.css'

function Navbar () {
    return(
        <>
            <header className="header">
                <a href="index.html #home" className="logo"> <i className="fas fa-heartbeat"></i> The Doctors Inc. </a>

                <nav className="navbar">
                    <a href="#home">home</a>
                    <a href="#services">services</a>
                    <a href="#about">about us</a>
                    <a href="#doctors">doctors</a>
                    <a href="#book">book</a>
                    <a href="#review">review</a>
                    <a href="#news">news</a>
                </nav>

                <div id="menu-btn" className="fas fa-bars"></div>

            </header>
        </>
    )
}

export default Navbar