import { faChevronRight, faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer () {
    return (
        <>
        {/* <!-- footer starts here --> */}

        <section className="footer">
            
            <div className="box-container">

                <div className="box">
                    <h3>quick links</h3>
                    <a href="#home">
                        <FontAwesomeIcon icon={faChevronRight} />
                        home
                    </a>
                    <a href="#services">
                        <FontAwesomeIcon icon={faChevronRight} />
                        our services
                    </a>
                    <a href="#about">
                        <FontAwesomeIcon icon={faChevronRight} />
                        about us
                    </a>
                    <a href="#doctors">
                        <FontAwesomeIcon icon={faChevronRight} />
                        our doctors
                    </a>
                    <a href="#book">
                        <FontAwesomeIcon icon={faChevronRight} />
                        book
                    </a>
                    <a href="#review">
                        <FontAwesomeIcon icon={faChevronRight} />
                        review
                    </a>
                    <a href="#news">
                        <FontAwesomeIcon icon={faChevronRight} />
                        news
                    </a>
                </div>

                <div className="box">
                    <h3>our services</h3>
                    <a href="#">
                        <FontAwesomeIcon icon={faChevronRight} />
                        dental care
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faChevronRight} />
                        massage therapy
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faChevronRight} />
                        cardiology
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faChevronRight} />
                        diagnosis
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faChevronRight} />
                        ambulance service
                    </a>
                </div>

                <div className="box">
                    <h3>contact info</h3>
                    <a href="#">
                        <FontAwesomeIcon icon={faPhone} />
                        +034-234-4455
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faPhone} />
                        +034-255-9802
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faEnvelope} />
                        thedoctors2023@gmail.com
                    </a>
                    <a href="#">
                        <FontAwesomeIcon icon={faMapMarker} />
                        yusay building, door #5, araneta st. Bacolod City 6100, Negros Occidental
                    </a>
                </div>

                <div className="box">
                    <h3>follow us</h3>
                    <a href="https://www.facebook.com/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                        facebook
                    </a>
                    <a href="https://twitter.com/" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} />
                        twitter
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                        instagram
                    </a>
                    <a href="https://www.linkedin.com/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                        linkedin
                    </a>
                    <a href="https://www.pinterest.ph/" target="_blank">
                        <FontAwesomeIcon icon={faPinterest} />
                        pinterest
                    </a>
                </div>
            </div>

            <div className="credit"> The Doctors Inc. <span>|all rights reserved|</span> 2023 </div>

        </section>

        {/* <!-- footer ends here --> */}
        </>
    )
}

export default Footer