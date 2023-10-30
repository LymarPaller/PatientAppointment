import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './home.css'
import { faCalendar, faChevronRight, faCircleChevronRight, faUser} from '@fortawesome/free-solid-svg-icons'
import surgeryIMG from './images/home-img.jpg'
import checkUpIMG from './images/about-imgs2.jpg'
import DoctorCards from '../components/doctor-cards/DoctorCards'
import doctor1 from './images/doc1.jpg'
import doctor2 from './images/doc2.jpg'
import doctor3 from './images/doc3.jpg'
import doctor4 from './images/doc4.jpg'
import doctor5 from './images/doc5.jpg'
import doctor6 from './images/doc6.jpg'
import bookIMG from './images/book-img.jpg'
import blogIMG1 from './images/blog1.jpg'
import blogIMG2 from './images/blog2.jpg'
import blogIMG3 from './images/blog3.jpg'
import IconContainer from '../components/icon-cards/IconContainer'
import BoxContainers from '../components/services-box-cards/BoxContainers'
import ClientContainer from '../components/client-cards/ClientContainer'


function Home () {

    const doctorArray = [
        {   
            id: 1,
            name: "Dr. James Heart",
            subtitle: "Expert Doctors",
            img: doctor1
        },
        {   
            id: 2,
            name: "Dr. James Heart",
            subtitle: "Expert Doctors",
            img: doctor2
        },
        {   
            id: 3,
            name: "Dr. James Heart",
            subtitle: "Expert Doctors",
            img: doctor3
        },
        {   
            id: 4,
            name: "Dr. James Heart",
            subtitle: "Expert Doctors",
            img: doctor4
        },
        {   
            id: 5,
            name: "Dr. James Heart",
            subtitle: "Expert Doctors",
            img: doctor5
        },
        {   
            id: 6,
            name: "Dr. James Heart",
            subtitle: "Expert Doctors",
            img: doctor6
        },
    ]

    return (
        <>
             {/* <!-- home start here --> */}

            <section className="home" id="home">

                <div className="image">
                    <img src={surgeryIMG} alt=""/>
                </div>

                <div className="content">
                    <h3>stay <span> safe,</span> stay <span> healthy</span></h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus eaque illum maiores quidem, quibusdam sunt dicta cumque sit ipsa esse optio reiciendis aut sint. Nisi aliquam exercitationem nemo doloribus amet?</p>
                    <a href="learnmore0.html" className="btn">
                        learn more
                        <FontAwesomeIcon icon={faCircleChevronRight} />
                    </a>
                </div>

            </section>

            {/* <!-- home ends here --> */}

            <IconContainer/>


            {/* <!-- services starts here --> */}

            <section className="services" id="services">

                <h1 className="heading">our <span>services</span></h1>
                <BoxContainers/>
                
            </section>

            {/* <!-- services ends here --> */}

            {/* <!-- about starts here --> */}

            <section className="about" id="about">

                <h1 className="heading"><span>about </span>us</h1>

                <div className="row">
                    <div className="image">
                        <img src={checkUpIMG} alt=""/>
                    </div>
                        <div className="content">
                            <h3>we take care of your healthy life</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam minus porro obcaecati. Voluptates animi ipsa facilis laboriosam molestias modi tempore debitis, illo, reiciendis quis ea labore, error obcaecati vitae.</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae voluptates, inventore minus, amet quas nulla facere ullam esse placeat provident repellendus mollitia perferendis. Voluptatem vero laborum, doloribus nihil magni nesciunt.</p>
                            <a href="learnmore7.html" className="btn">learn more
                                <FontAwesomeIcon icon={faCircleChevronRight}/>
                            </a>
                        </div>
                </div>

            </section>

            {/* <!-- about ends here --> */}

            {/* <!-- doctors starts here --> */}

            <section className="doctors" id="doctors">

                <h1 className="heading">our <span>doctors</span></h1>

                <div className="box-container">
                    {
                        doctorArray.map(
                            doctorArr=><DoctorCards
                                key={doctorArr.id}
                                name={doctorArr.name}
                                sub={doctorArr.subtitle}
                                img={doctorArr.img}
                            />
                        )
                    }
                </div>
            </section>

            {/* <!-- doctors ends here --> */}
            
            {/* <!-- booking starts here --> */}

            <section className="book" id="book">
                <h1 className="heading"><span>book</span> now </h1>

                <div className="row">
                    <div className="image">
                        <img src="images/book-img.jpg" alt=""/>
                        <img src={bookIMG} alt=""/>
                    </div>

                    <form action="">
                        <h3>book appointment</h3>
                        <input type="text" placeholder="Full Name" className="box"/>
                        <input type="number" placeholder="Contact Number" className="box"/>
                        <input type="email" placeholder="Email Address" className="box"/>
                        <input type="date" className="box"/>
                        <input type="submit" value="book now" className="btn"/>
                    </form>
                </div>

            </section>

            {/* <!-- booking ends here --> */}

            {/* <!-- review starts here --> */}

            <section className="review" id="review">
                <h1 className="heading"> client's <span>review</span></h1>
                <ClientContainer/>
            </section>    

            {/* <!-- review ends here --> */}

            {/* <!-- news starts here --> */}

            <section className="news" id="news">

                <h1 className="heading">news <span>and</span> updates </h1>
                <div className="box-container">   

                    <div className="box">
                        <div className="image">
                            <img src={blogIMG1} alt=""/>
                        </div>
                            <div className="content">
                                <div className="icon">
                                    <a href="">
                                        <FontAwesomeIcon icon={faCalendar}/>
                                        1st october, 2023
                                    </a>
                                    <a href="">
                                        <FontAwesomeIcon icon={faUser}/>
                                        admin
                                    </a>
                                </div>
                                <h3>news and updates goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe nam corporis incidunt sit earum. Sint, labore quo! Error ex officia alias facilis, sequi labore sint nihil? Hic, necessitatibus eaque.</p>
                                <a href="news1.html" className="btn">
                                    learn more
                                    <FontAwesomeIcon icon={faChevronRight}/>
                                </a>    
                            </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={blogIMG2} alt=""/>
                        </div>
                            <div className="content">
                                <div className="icon">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faCalendar}/>
                                        1st october, 2023
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faUser}/>
                                        admin
                                    </a>
                                </div>
                                <h3>news and updates goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe nam corporis incidunt sit earum. Sint, labore quo! Error ex officia alias facilis, sequi labore sint nihil? Hic, necessitatibus eaque.</p>
                                <a href="news2.html" className="btn">
                                    learn more
                                    <FontAwesomeIcon icon={faChevronRight}/>
                                </a>    
                            </div>
                    </div>

                    <div className="box">
                        <div className="image">
                            <img src={blogIMG3} alt=""/>
                        </div>
                            <div className="content">
                                <div className="icon">
                                    <a href="#">
                                        <FontAwesomeIcon icon={faCalendar}/>
                                        1st october, 2023
                                    </a>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faUser}/>
                                        admin
                                    </a>
                                </div>
                                <h3>news and updates goes here</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia saepe nam corporis incidunt sit earum. Sint, labore quo! Error ex officia alias facilis, sequi labore sint nihil? Hic, necessitatibus eaque.</p>
                                <a href="news3.html" className="btn">
                                    learn more
                                    <FontAwesomeIcon icon={faChevronRight}/>
                                </a>    
                            </div>
                    </div>
                </div>

            </section>

            {/* <!-- news ends here --> */}
        </>
    )
}

export default Home