import React, {useState, useEffect} from 'react'


export default function Portfolio() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/JonathanJohansson24/repos')
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                setPosts(data);
                setLoading(false);
            }, 1000)
        })  
        .catch(error => {
            console.error('Sidan kan inte läsas', error)
            });
        }, []);
        if (loading) {
            return(         
                <div className='portfolio-loading'>
                    <h2>Sidan laddas</h2>
                    
                    
                    <h3>Vänligen vänta...</h3>
                </div>
            )
            
        }

    return(
            
        <div className='git-projects'>
            <h1>Mina GitHub-projekt</h1>
                <div className='projects'>
                {posts.map(post => (
                    <div className='projectDiv' key={post.id}>
                        <a href={post.html_url} target="_blank" rel="noopener noreferrer"><h3>- {post.name} -</h3></a>
                        <p>{post.description}</p>
                    </div>
                ))}
                </div>
        </div>

    
    );
}

