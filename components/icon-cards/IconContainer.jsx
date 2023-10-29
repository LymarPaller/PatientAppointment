import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHospital, faProcedures, faUserDoctor, faUsers } from '@fortawesome/free-solid-svg-icons'

function IconContainer () {
    const IconDetailArray = [
        {
            id: 1,
            img: faUserDoctor,
            data: "140+",
            details: "doctors at work"
        },
        {
            id: 2,
            img: faUsers,
            data: "1040+",
            details: "satisfied patients"
        },
        {
            id: 3,
            img: faProcedures,
            data: "500+",
            details: "bed facility"
        },
        {
            id: 4,
            img: faHospital,
            data: "40+",
            details: "Vacant Rooms"
        },
    ]
    return (
        <>
        <section className="icons-container">
            {
                IconDetailArray.map(IconDatailARR=><IconCard
                    key={IconDatailARR.id}
                    img={IconDatailARR.img}
                    data={IconDatailARR.data}
                    details={IconDatailARR.details}
                />)
            }
        </section>
        </>
    )
}

function IconCard ({img, data, details}) {
    return (
        <>
        <div className="icons">
            <FontAwesomeIcon icon={img}/>
            <h3>{data}</h3>
            <p>{details}</p>
        </div>
        </>
    )
}

export default IconContainer