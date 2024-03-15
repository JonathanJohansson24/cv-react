import {useState, useEffect} from "react"

function Home(){

    const [color, setColor] = useState("white");
    
    const getRandomColor = () => {
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        return randomColor;
    }
    
    const click = color => {
        setColor(getRandomColor)
    }
    useEffect(() => {
        document.body.style.backgroundColor = color
    }, [color])
    return(
        
        <div className="start">

            <div className="content">
                <h3>Välkommen till mitt CV samt information om vem just jag är! <br/> 
                    Här kommer du kunna ta del av bland annat dessa saker:</h3>

                    <p>
                    Se min Portfolio <br />
                    Se min Kontakt information <br/>
                    Läsa mitt Personliga brev <br/>
                    Se mina Arbetslivserfarenheter <br/>
                    Samt ta del av de olika utbildningar jag läst <br/> 
                    </p>
            </div>
            <div className="image" >
            <img src="/profilbild.jpg" alt="profilepicture" onClick={click}/>
            </div>

        </div>
        
    );
}

export default Home