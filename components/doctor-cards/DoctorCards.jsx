import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './doctorcards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DoctorCards ({name, sub, img}) {

    return (
        <>
        <div className="box">
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <span>{sub}</span>
            <div className="share">
                <a href="https://www.facebook.com/" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF}/>
                </a>
                <a href="https://twitter.com/" target="_blank">
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram}/>
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin}/>
                </a>
            </div>
        </div>
        </>
    )
}

export default DoctorCards