import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from "./LoginForm.module.css";
import axios from "axios";
import {useForm} from 'react-hook-form';
import {login} from "../../API/AuthenticationAPI";
import {useHistory} from 'react-router-dom';



const LoginForm = props => {

    const {handleSubmit, register} = useForm();
    const history = useHistory();

    const [loginState, setloginState] = useState({
        email: "",
        password: "",
    });

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("entered try block of submit fct");
            const formdata = new FormData();
            formdata.append("email", loginState.email);
            formdata.append("password", loginState.password);

            // call api
            login(formdata).then(success => {
                console.log(success.status === 200)
                if (success) {
                    history.push("/home")
                }
            })

        } catch (err) {
            console.log(err)
        }
    }

    const handlechange = (e) => {
        const {id, value} = e.target
        setloginState(
            prevState => ({
                ...prevState,
                [id]: value
            })
        )
        console.log(loginState);
    };

    return (
        <div>
            <div
                className={`mx-auto d-flex flex-column justify-content-center align-items-center ${styles.registerContainer}`}>
                <form onSubmit={handleFormSubmit}>
                    <div className={`d-flex flex-column bd-highlight align-items-center ${styles.boxContainer}`}>
                        <div className={`bd-highlight mx-2 bg-transparent ${styles.boxElement}`}>
                            <input
                                name={"email"}
                                id={"email"}
                                {...register("email")}
                                onChange={handlechange}
                                type="text" className={`input-group bg-transparent ${styles.heroInput}`}
                                placeholder={`Your Email`}
                            />
                        </div>
                        <div className={`bd-highlight mx-2 bg-transparent ${styles.boxElement} ${styles.secondBox}`}>
                            <input
                                name={"password"}
                                id={"password"}
                                {...register("password")}
                                onChange={handlechange}
                                type="text" className={`input-group bg-transparent ${styles.heroInput}`}
                                placeholder={`Password`}/>
                        </div>
                        <div className={`mt-2`}>
                            <a href="#" className={`text-decoration-none text-black`}>Forgot Password?</a>
                        </div>
                    </div>
                    <div className={`${styles.signupContainer}`}>
                        <button
                            type="submit"
                            className={`btn fw-bold text-black ${styles.signup}`}
                        >
                            SIGN IN
                        </button>
                    </div>
                </form>
                <div className={`w-75 text-center mt-xxl-3`}>
                        <span className={`text-white`}>Don’t Have An Account Yet?    </span>
                        <a className={styles.directToSignUp} href="#"> Sign Up</a>
                    </div>
            </div>
        </div>
    );
};

LoginForm.propTypes = {};

export default LoginForm;