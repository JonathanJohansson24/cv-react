import React, { useEffect, useState } from 'react';
import silenPic from "./images/silentia.png"
import fbgPic from "./images/falkenbergs.gif"
import expData from "./json/experience.json"

function Erfarenheter() {

    const [utbildningar, setUtbildningar] = useState({ work: [] });

    useEffect(() => {
        // Eftersom jsData redan är laddad och inte behöver hämtas,
        // kan du direkt använda den här.
        setUtbildningar(expData);
    }, []);
    const [erfarenheter, setErfarenheter] = React.useState(expData);

return (
    <div className="container">
        <div id="silentia">
            <h2>Silentia</h2>
            <img src={silenPic} alt="Logo of Silentia AB" />
            {erfarenheter.work[0] && (
                <p>{erfarenheter.work[0].company}<br/>{erfarenheter.work[0].role}<br/>{erfarenheter.work[0].year}</p>
            )}
        </div>
        
        <div id="falkenbergs">
            <h2>Falkenbergs Plåtslageri</h2>
            <img src={fbgPic} alt="Logo of Falkenbergs plåtslageri"/>
            {erfarenheter.work[1] && (
                <p>{erfarenheter.work[1].company}<br/>{erfarenheter.work[1].role}<br/>{erfarenheter.work[1].year}</p>
            )}
        </div>
    </div>
);
}

export default Erfarenheter


/*  <div className="container">
            <div id="campus">
                <h2>Campus Varberg</h2>
                <img src="/public/campus.png" alt="Logo of Campus Varberg" />
                {utbildningar.education[0] && (
                    <p>{utbildningar.education[0].school}<br/>{utbildningar.education[0].status}<br/>{utbildningar.education[0].subject}</p>
                )}
            </div>
            <div id="gymnasium">
                <h2>Falkenbergs Gymnasieskola</h2>
                <img src="/public/gymnasium.jpg" alt="Logo of Falkenbergs Gymnasieskola"/>
                {utbildningar.education[1] && (
                    <p>{utbildningar.education[1].school}<br/>{utbildningar.education[1].status}<br/>{utbildningar.education[1].subject}</p>
                )}
            </div>
        </div>*/