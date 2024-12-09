import './Homepage.css';
import logo1 from '../assets/Group 90.png';
import logo2 from '../assets/Group 89.png';


function Homepage() {
    return (
        <>
            <div className="navbar">
                <img src={logo2} alt="logo"/>
                <h3>Recipes</h3>
                <h3>Add Recipe</h3>
                <h3 className="login">Login</h3>
                <h3>Register</h3>
            </div>
            <div className="BigLogo">
                <img src={logo1} alt="logo"/>
            </div>
        </>

    )
}

export default Homepage;