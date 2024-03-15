import React, {useState, useEffect} from "react"

function Modal(){

    const [openModal, setOpenModal] = useState(false);

    const [pressedKeys, setPressedKeys] = useState("");

    const handleCloseClick = () => {
        setOpenModal(false);
    };


const handleKeyPress = (event) => {
    setPressedKeys((prevPressedKeys) => prevPressedKeys + event.key);
};

useEffect(() => {
    if(pressedKeys.slice(-4) === "1337"){
        setOpenModal(true);
    
        setPressedKeys("")
    }

}, [pressedKeys]);

useEffect(() => {

    window.addEventListener("keydown", handleKeyPress);


    return () => {
    window.removeEventListener("keydown", handleKeyPress);
    };
}, []); 


    if (!openModal) return null;


    return (
        <div className="overlay">
            <div className="overlayBackground" onClick={handleCloseClick} />
                <div className="modalP">
                    <div className="overlayControls">
                    <button className="close-btn" type="button"onClick={handleCloseClick}></button>
                    </div>
                    <img src="./easter.jpg" alt="Picture of a monkey dressed up as a easterbunny" className="easterImg" /> 
                    
                    <h2>Du hittade påskägget</h2> 
                </div>
        </div>
        
    );
}

export default Modal; 