import { useState } from "react";
import validacion1 from "./validacion1"


const Form = ({login}) => {

    const [userData, setuserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = (event)=>{
        event.preventDefault();
        login(userData);
    }
    const handleChange = (event) => {
        setuserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(
            validacion1({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    return (
        <form  onClick={handleSubmit} >
            <div>
                
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" value={userData.email} onChange={handleChange} />
                {errors.email && <p style={{color:'red'}}> {errors.email}</p>} 
                
                 <label htmlFor="password">Password: </label>
                <input type="password" name="password" value={userData.password} onChange={handleChange} />
                {errors.password && <p style={{color:'red'}}> {errors.password}</p>} 
                <button >Submit</button>

            </div></form>
    )
}

export default Form;