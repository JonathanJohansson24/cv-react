import {Link, useMatch, useResolvedPath} from "react-router-dom"


function Navbar(){
    return (
        <nav className="nav">
            <Link to="/" className="site-title" id="logo">
                Jonathan Nordin
                </Link>
            <ul>
                <CustomLink to="/portfolio">Portfolio</CustomLink>
                <CustomLink to="/kontakt">Kontakt</CustomLink>
                <CustomLink to="/brev">Brev</CustomLink>
                <CustomLink to="/erfarenheter">Erfarenheter</CustomLink>
                <CustomLink to="/utbildningar">Utbildningar</CustomLink>
            </ul>
        </nav>
    );
}

export default Navbar

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}