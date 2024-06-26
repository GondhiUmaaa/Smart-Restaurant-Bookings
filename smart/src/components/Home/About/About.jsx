import "./About.scss"

import Cheff from "../../../assets/images/about/cheff.png"

import salad from "../../../assets/images/about/salad.png"
import cheese from "../../../assets/images/about/cheese.png"

import allTime from "../../../assets/images/about/icons/724.svg"

const About = () => {
  return (
    <div id="About" className="about">
        <div className="container">
            <div className="image">
                <img src={Cheff} alt="cheff" />
                <img className="cheese" src={cheese} alt="cheese" />
                <img className="salad" src={salad} alt="salad" />
            </div>
            <div className="information">
                <h1>We Are More Than Multiple Service</h1>

                <p>This is a type of restaurant which typical serves food and drinks, in addition to light refreshment such as baked good or snacks. The term comes from the french word meaning food.</p>
                    <ul>
                        <li>
                            <img src={allTime} alt="" />
                            <span>Online Order</span>
                        </li>
                        <li>
                            <img src={allTime} alt="" />
                            <span>Online Order</span>
                        </li>
                        <li>
                            <img src={allTime} alt="" />
                            <span>Online Order</span>
                        </li>
                        <li>
                            <img src={allTime} alt="" />
                            <span>Online Order</span>
                        </li>
                        <li>
                            <img src={allTime} alt="" />
                            <span>Online Order</span>
                        </li>
                        <li>
                            <img src={allTime} alt="" />
                            <span>Online Order</span>
                        </li>
                    </ul>

            </div>
        </div>
    </div>
  )
}

export default About