import React from 'react'
import { Link } from 'react-router-dom'
import Person1 from "../../../images/team/6.png";
import Person2 from "../../../images/team/4.png";
import Person3 from "../../../images/team/3.png";
import Person4 from "../../../images/team/4.png";
import './index.css'

export default function Team() {
    const teamPpl = [
        { img: Person1, name: "Rinu Patel", job: "Developer" },
        { img: Person2, name: "Sujata Raut", job: "Designer" },
        { img: Person3, name: "Nisha Sharma", job: "Photographer" },
        { img: Person4, name: "Ujala Maurya ", job: "Car Detailist" },

    ];
    return (
        <>
            <div>
                <div className="bgImage">
                    <ul>
                        <h2>Team</h2>
                        <Link to="/">Home </Link> <Link to="/team">/team</Link>
                    </ul>


                </div>
            </div>
            <div className="cotnainer">
                <p className='paragraph'>Our Developer Department is the driving force behind our organization's technological innovation. Committed to excellence and collaboration,
                    our team of skilled developers works tirelessly to craft cutting-edge solutions that propel our company forward.</p>
                <div className="team-container">
                    {teamPpl.map((ppl, id) => (
                        <div key={id} className="team-container__box">
                            <div className="team-container__box__img-div">
                                <img src={ppl.img} alt="team_img" />
                            </div>
                            <div className="team-container__box__descr">
                                <h3>{ppl.name}</h3>
                                <p>{ppl.job}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
