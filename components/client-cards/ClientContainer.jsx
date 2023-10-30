import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import reviewIMG1 from '../../pages/images/pic1.jpg'
import reviewIMG2 from '../../pages/images/pic2.jpg'
import reviewIMG3 from '../../pages/images/pic3.jpg'

function ClientContainer () {
    const boxArray = [
        {
            id: 1,
            img: reviewIMG1,
            name: "sam boy",
            detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde autem illo rem architecto reprehenderit non quasi inventore deleniti? Possimus sunt veritatis mollitia eius alias eligendi natus quasi saepe provident animi."
        },
        {
            id: 2,
            img: reviewIMG2,
            name: "sam boy",
            detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde autem illo rem architecto reprehenderit non quasi inventore deleniti? Possimus sunt veritatis mollitia eius alias eligendi natus quasi saepe provident animi."
        },
        {
            id: 3,
            img: reviewIMG3,
            name: "sam boy",
            detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde autem illo rem architecto reprehenderit non quasi inventore deleniti? Possimus sunt veritatis mollitia eius alias eligendi natus quasi saepe provident animi."
        },
    ]

    return (
        <>
        <div className="box-container">
            {
                boxArray.map(boxARR => 
                    <ClientCard
                        key={boxARR.id}
                        img={boxARR.img}
                        name={boxARR.name}
                        detail={boxARR.detail}
                    />
                )
            }
        </div>
        </>
    )
}

function ClientCard ({ img, name, detail }) {
    return (
        <>
        <div className="box">
            <img src={img} alt=""/>
            <h3>{name}</h3>
            <div className="stars">
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
                <FontAwesomeIcon icon={faStar}/>
            </div>
            <p className="text">{detail}</p>
        </div>
        </>
    )
}

export default ClientContainer