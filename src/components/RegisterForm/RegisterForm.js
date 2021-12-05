import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from "../../components/RegisterForm/RegisterForm.module.css";
import {register} from "../../API/AuthenticationAPI";
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import axios from "axios";

const RegisterForm = props => {

    const {handleSubmit, register} = useForm();

    const history = useHistory();

    const [registerState, setRegisterState] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        password_confirmation: ""
    });

    // handle change function for the input field
    const handlechange = (e) => {
        const {id, value} = e.target
        setRegisterState(
            prevState => ({
                ...prevState,
                [id]: value
            })
        )
        console.log(registerState);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("entered try block of submit fct");
            const formdata = new FormData();
            formdata.append("name", registerState.name);
            formdata.append("email", registerState.email);
            formdata.append("phone", registerState.phone);
            formdata.append("password", registerState.password);
            formdata.append("password_confirmation", registerState.password_confirmation);

            // call api
            const registersuccess = await axios.post(`http://localhost:8000/api/register`, formdata)
            console.log(registersuccess);

            if (registersuccess) {
                history.push("/login");
            }

        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div>
            <div
                className={`mx-auto d-flex flex-column justify-content-center align-items-center ${styles.registerContainer}`}>
                <form onSubmit={handleFormSubmit}>
                    <div className={`d-flex flex-column bd-highlight align-items-center ${styles.boxContainer}`}>
                        <div className={`bd-highlight mx-2 bg-transparent ${styles.boxElement}`}
                        >
                            <input
                                id="name"
                                name="name"
                                {...register("name")}
                                type="text"
                                className={`input-group bg-transparent ${styles.heroInput}`}
                                placeholder={`Your Name`}
                                onChange={handlechange}
                            />
                        </div>
                        <div className={`bd-highlight mx-2 bg-transparent ${styles.boxElement} ${styles.secondBox}`}>
                            <input
                                id="email"
                                name="email"
                                {...register("email")}
                                type="text" className={`input-group bg-transparent ${styles.heroInput}`}
                                placeholder={`Your Email`}
                                onChange={handlechange}
                            />
                        </div>
                        <div className={`bd-highlight mx-2 bg-transparent ${styles.boxElement} ${styles.secondBox}`}>
                            <input
                                id="phone"
                                name="phone"
                                {...register("phone")}
                                type="text"
                                className={`input-group bg-transparent ${styles.heroInput}`}
                                placeholder={`Phone Number`}
                                onChange={handlechange}
                            />
                        </div>
                        <div className={`bd-highlight mx-2 bg-transparent ${styles.boxElement} ${styles.secondBox}`}>
                            <input
                                id="password"
                                name="password"
                                {...register("password")}
                                type="text"
                                className={`input-group bg-transparent ${styles.heroInput}`}
                                placeholder={`Password`}
                                onChange={handlechange}
                            />
                        </div>
                        <div className={`bd-highlight mx-2 bg-transparent ${styles.boxElement} ${styles.secondBox}`}>
                            <input
                                id="password_confirmation"
                                name="password_confirmation"
                                {...register("password_confirmation")}
                                type="text" className={`input-group bg-transparent ${styles.heroInput}`}
                                placeholder={`Confirm Password`}
                                onChange={handlechange}
                            /></div>
                    </div>
                    <div className={`${styles.signupContainer}`}>
                        <button type="submit" className={`btn fw-bold text-black ${styles.signup}`}>SIGN UP</button>
                    </div>
                </form>

                <div className={`w-75 text-center mt-xxl-3`}>
                    <p className={`text-white`}>By signing up I agree to Booka’s Terms of Service & Privacy Policy</p>
                </div>
                <div>
                    <span className={`text-white`}>Already Have An Account?    </span>
                    <a className={styles.directToSignIn} href="#"> Sign In</a>
                </div>
            </div>
        </div>
    );
};

RegisterForm.propTypes = {};

export default RegisterForm;