import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAmbulance, faCircleChevronRight, faHeartbeat, faNotesMedical, faPills, faProcedures, faUserMd } from "@fortawesome/free-solid-svg-icons"

function BoxContainers () {
    const boxArray = [
        {
            id: 1,
            icon: faNotesMedical,
            title: "free checkups",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iusto inventore obcaecati optio beatae et cum amet quam ad aperiam, ut accusamus. Iure omnis odio incidunt? Iste modi libero labore.",
        },
        {
            id: 2,
            icon: faAmbulance,
            title: "24/7 ambulance",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iusto inventore obcaecati optio beatae et cum amet quam ad aperiam, ut accusamus. Iure omnis odio incidunt? Iste modi libero labore.",
        },
        {
            id: 3,
            icon: faUserMd,
            title: "expert doctors",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iusto inventore obcaecati optio beatae et cum amet quam ad aperiam, ut accusamus. Iure omnis odio incidunt? Iste modi libero labore.",
        },
        {
            id: 4,
            icon: faPills,
            title: "medicines",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iusto inventore obcaecati optio beatae et cum amet quam ad aperiam, ut accusamus. Iure omnis odio incidunt? Iste modi libero labore.",
        },
        {
            id: 5,
            icon: faProcedures,
            title: "bed facility",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iusto inventore obcaecati optio beatae et cum amet quam ad aperiam, ut accusamus. Iure omnis odio incidunt? Iste modi libero labore.",
        },
        {
            id: 6,
            icon: faHeartbeat,
            title: "total care",
            details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus iusto inventore obcaecati optio beatae et cum amet quam ad aperiam, ut accusamus. Iure omnis odio incidunt? Iste modi libero labore.",
        },
    ]


    return (
        <>
        <div className="box-container">
            {
                boxArray.map(boxARR=><BoxCard
                    key={boxARR.id}
                    icon={boxARR.icon}
                    title={boxARR.title}
                    details={boxARR.details}
                />)
            }
        </div>
        </>
    )
}

function BoxCard ({ icon, title, details }) {
    return (
        <>
        <div className="box">
            <FontAwesomeIcon icon={icon}/>
            <h3>{title}</h3>
            <p>{details}</p>
            <a href="learnmore1.html" className="btn"> learn more 
                <FontAwesomeIcon icon={faCircleChevronRight}/>
            </a>
        </div>
        </>
    )
}

export default BoxContainers