import {Routes,Route,Link} from "react-router-dom"
export default function Header(){
    return (
        <header>
           <Link to="/" className="link"> <h1 className="title"> Van Life</h1></Link> 
            <nav>
                <Link className="link" to="/host">Host</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/VanList">Vans</Link>
            </nav>
        </header>
       
    )
}