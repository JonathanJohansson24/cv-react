import React, { useEffect, useState } from 'react';
import campusPic from "./images/campus.png"
import gymnPic from "./images/gymnasium.jpg"
import jsData from "./json/education.json"; // Antag att detta är korrekt sökväg till din JSON-fil

function Utbildningar() {
    const [utbildningar, setUtbildningar] = useState({ education: [] });

    useEffect(() => {
        // Eftersom jsData redan är laddad och inte behöver hämtas,
        // kan du direkt använda den här.
        setUtbildningar(jsData);
    }, []);

    return (
        <div className="container">
            <div id="campus">
                <h2>Campus Varberg</h2>
                <img src={campusPic} alt="Logo of Campus Varberg" />
                {utbildningar.education[0] && (
                    <p>{utbildningar.education[0].school}<br/>{utbildningar.education[0].status}<br/>{utbildningar.education[0].subject}</p>
                )}
            </div>
            <div id="gymnasium">
                <h2>Falkenbergs Gymnasieskola</h2>
                <img src={gymnPic} alt="Logo of Falkenbergs Gymnasieskola"/>
                {utbildningar.education[1] && (
                    <p>{utbildningar.education[1].school}<br/>{utbildningar.education[1].status}<br/>{utbildningar.education[1].subject}</p>
                )}
            </div>
        </div>
    );
}

export default Utbildningar;