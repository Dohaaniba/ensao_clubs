import React from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'




function Login(props){
    const [password , setPassword]= React.useState("");
    const[showPassword , setShowPassword]= React.useState(false);
    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
    };
    const togglePasswordShow =()=>{
        setShowPassword(!showPassword);
    }
    return(
       <div className="container">
            <div className="content">
                <div className="login">
                    <div className="logo">
                    <img className="image-logo" src="./Family_link_logo_vector_image_on_VectorStock-removebg-preview.png" alt="logo" />
                    <h3 className="welcome">Welcome back !</h3>
                    </div>
                    
                    <div className="form">
                         <div className="input_form">
                            <input className="input" required type="email" id="email" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input_form">
                         <input className="input" required 
                            type={showPassword ? 'text' : 'password'} 
                            id="password"
                            value={password}
                            onChange={handlePasswordChange} />
                            <label htmlFor="password">Password</label>
                            <button className="eye" onClick={togglePasswordShow}>
                                {showPassword ? (<FontAwesomeIcon icon={faEye} /> ):
                                // Icône d'œil pour afficher le mot de passe
                                (<FontAwesomeIcon icon={faEyeSlash} /> )
          
                                 }
                            </button>
                        </div>
                        <div className="button">
                            <div className="forgot-password">Forgot password ? <a href="#">Click here</a></div>
                            <button className="butt">Login</button>
                            <div className="account">Don't have an account ? <a href="#" onClick={props.onSwitchPage}>Regester here </a></div>
                           
                        </div>
                        
                    </div>
                
           
                </div>
            </div>
        
       </div>
    )
}

export default Login;