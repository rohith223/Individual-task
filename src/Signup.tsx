import { useState, ChangeEvent, FormEvent } from "react"; // Import React
import "./auth.css";
import Validation from "./SignupValidation";
import {useNavigate } from "react-router-dom";
import axios from 'axios';
import image from './image.png';


interface Values {
    Name: string;
    email: string;
    password: string;
    mobile:string;
    address: string;
    job: string;
    blood:string;
    hobby: string;
}

interface Errors {
    Name: string;
    email: string;
    password: string;
    mobile: string;
}

function Signup() {
    const [values, setValues] = useState<Values>({
        Name: "",
        email: "",
        password: "",
        mobile:"",
        address:"",
        job:"",
        blood:"",
        hobby:""
    });
    const [errors, setErrors] = useState<Errors>({
        Name: "",
        email: "",
        password: "",
        mobile:""
    });
    const navigate = useNavigate();

    const HandleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validationErrors = Validation(values);
        // const {Name,email,password} = values
        // if(Name.trim().length < 1){
        //     alert("Name is required")
        //     setErrors(false);
        // }
        // if(email.trim().length < 1){
        //     alert("Email is required")
        // }
        // if(password.trim().length < 1){
        //     alert("Password is required")
        // }
         setErrors(validationErrors );
         if (!validationErrors.Name && !validationErrors.email && !validationErrors.password && !validationErrors.mobile) {
            axios.post('http://localhost:8086/signup',values)
                .then(res => {
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div className="reg-main-container">
            <div className="reg-image">
        <img src={image} alt="Registration" width={'849px'} />
        {/* <img src={InnerImage}/> */}
      </div>
            <div className="reg-sub-container">
                <h1 className="registration-heading">Registration </h1>
                <form className="reg-form" onSubmit={HandleSubmit}>
                    <div>
                        <label htmlFor="name">Name : </label>
                        <br />
                        <input
                            type="text"
                            placeholder="Enter Your name"
                            id="name"
                            onChange={HandleInput}
                            name="Name"
                            value={values.Name}
                        />
                        {errors.Name && <span className="text-danger">{errors.Name}</span>}
                    </div>
                    <div>
                        <label htmlFor="E-mail">E-mail : </label>
                        <br />
                        <input
                            type="email"
                            placeholder="Enter User name"
                            id="userName"
                            onChange={HandleInput}
                            name="email"
                            value={values.email}
                        />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div>
                        <label htmlFor="password">Password : </label>
                        <br />
                        <input
                            type="password"
                            placeholder="Enter password"
                            id="password"
                            onChange={HandleInput}
                            name="password"
                            value={values.password}
                        />

                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <div>
                        <label htmlFor="mobile">Mobile-No : </label>
                        <br />
                        <input
                            type="text"
                            placeholder="Enter Mobile number"
                            id="mobile"
                            onChange={HandleInput}
                            name="mobile"
                            value={values.mobile}
                        />
                        </div>
                        <div>
                        <label htmlFor="address">Address : </label>
                        <br />
                        <input
                            type="text"
                            placeholder="Enter your Address"
                            id="address"
                            onChange={HandleInput}
                            name="address"
                            value={values.address}
                        />
                        </div>
                        <div>
                        <label htmlFor="job">Designation:  </label>
                        <br />
                        <input
                            type="text"
                            placeholder="Enter your Designation"
                            id="job"
                            onChange={HandleInput}
                            name="job"
                            value={values.job}
                        />
                        </div>
                        <div>
                        <label htmlFor="blood">Blood Group:  </label>
                        <br />
                        <input
                            type="text"
                            placeholder="Enter your Blood group"
                            id="blood"
                            onChange={HandleInput}
                            name="blood"
                            value={values.blood}
                        />
                        </div>
                        <div>
                        <label htmlFor="hobby">Hobby:  </label>
                        <br />
                        <input
                            type="text"
                            placeholder="Enter your hobby"
                            id="hobby"
                            onChange={HandleInput}
                            name="hobby"
                            value={values.hobby}
                        />
                        </div>
                        
                    <button type="submit" className="reg-button">
                        Register
                    </button>
                    {/* <Link to= "/"></Link> */}
                </form>
            </div>
        </div>
    );
}

export default Signup;
