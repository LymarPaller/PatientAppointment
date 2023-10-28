import './navbar.css'

function Navbar () {
    return(
        <>
            <header className="header">
                <a href="index.html #home" className="logo"> <i className="fas fa-heartbeat"></i> The Doctors Inc. </a>

                <nav className="navbar">
                    <a href="index.html #home">home</a>
                    <a href="index.html #services">services</a>
                    <a href="index.html #about">about us</a>
                    <a href="index.html #doctors">doctors</a>
                    <a href="index.html #book">book</a>
                    <a href="index.html #review">review</a>
                    <a href="index.html #news">news</a>
                </nav>

                <div id="menu-btn" className="fas fa-bars"></div>

            </header>
        </>
    )
}

export default Navbar