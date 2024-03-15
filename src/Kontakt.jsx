import {FaGithub} from "react-icons/fa";

import {FaLinkedin} from "react-icons/fa6";
function Kontakt(){
    return(
        <div className="container">
        <div className="info">
            <h2>Kontaktuppgifter</h2>
            <ul>
                <li>Namn: Jonathan Nordin</li>
                <li>Nuvarande position: Studerande</li>
                <li>Telefon: 073-0310667</li>
                <li>Email: Jonathan.nordin24@gmail.com </li>
                <li><a href="https://www.linkedin.com/in/jonathan-nordin-784928294" target="_blank" ><FaLinkedin color ="blue" size ="5rem"/></a>
                <a href="https://github.com/JonathanJohansson24" target ="_blank"><FaGithub color ="black" size ="5rem"/></a></li>
            </ul>
        </div>

    </div>
    );
}

export default Kontakt