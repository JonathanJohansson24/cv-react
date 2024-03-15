import {FaLinkedin} from "react-icons/fa6";
function Footer(){

    return(
    <div className="footer">
        &copy; @{new Date().getFullYear()}, Jonathan Nordin. All rights reserved. <a href="https://www.linkedin.com/in/jonathan-nordin-784928294" target="_blank" ><FaLinkedin color ="blue" size="1.5rem"/></a>
    </div>
    );
}

export default Footer