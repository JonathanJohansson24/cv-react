import React, { useEffect, useState } from 'react';
function Utbildningar() {
    const [utbildningar, setUtbildningar] = useState({ education: [] });

    useEffect(() => {
        fetch("./education.json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Nätverksrespons var inte ok');
                }
                return response.json();
            })
            .then(data => setUtbildningar(data))
            .catch(error => console.error('Ett fel uppstod vid hämtning av utbildningsdata: ', error));
    }, []);

    return (
        <div className="container">
            <div id="campus">
                <img src="./campus.png" alt="Logo of Campus Varberg" />
                <h2>Campus Varberg</h2>
                {utbildningar.education[0] && (
                    <p>{utbildningar.education[0].school}<br/>{utbildningar.education[0].status}<br/>{utbildningar.education[0].subject}</p>
                )}
            </div>
            <div id="gymnasium">
                <img src="./gymnasium.jpg" alt="Logo of Falkenbergs Gymnasieskola"/>
                <h2>Falkenbergs Gymnasieskola</h2>
                {utbildningar.education[1] && (
                    <p>{utbildningar.education[1].school}<br/>{utbildningar.education[1].status}<br/>{utbildningar.education[1].subject}</p>
                )}
            </div>
        </div>
    );
}

export default Utbildningar;