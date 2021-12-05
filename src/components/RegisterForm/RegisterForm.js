import React from 'react';
import PropTypes from 'prop-types';
import styles from "../../components/RegisterForm/RegisterForm.module.css";

const RegisterForm = props => {
    return (
        <div>
            <div className={`mx-auto d-flex flex-column justify-content-center align-items-center ${styles.registerContainer}`}>
                <div className={`d-flex flex-column bd-highlight align-items-center ${styles.boxContainer}`}>
                    <div className={`bd-highlight mx-2 bg-transparent ${styles.boxElement}`}><input type="text" className={`input-group bg-transparent ${styles.heroInput}`} placeholder={`Your Name`}/></div>
                    <div className={`bd-highlight mx-2 bg-transparent ${styles.boxElement} ${styles.secondBox}`}><input type="text" className={`input-group bg-transparent ${styles.heroInput}`} placeholder={`Your Email`}/></div>
                    <div className={`bd-highlight mx-2 bg-transparent ${styles.boxElement} ${styles.secondBox}`}><input type="text" className={`input-group bg-transparent ${styles.heroInput}`} placeholder={`Phone Number`}/></div>
                    <div className={`bd-highlight mx-2 bg-transparent ${styles.boxElement} ${styles.secondBox}`}><input type="text" className={`input-group bg-transparent ${styles.heroInput}`} placeholder={`Password`}/></div>
                    <div className={`bd-highlight mx-2 bg-transparent ${styles.boxElement} ${styles.secondBox}`}><input type="text" className={`input-group bg-transparent ${styles.heroInput}`} placeholder={`Confirm Password`}/></div>
                </div>
                <div className={`${styles.signupContainer}`}>
                    <button className={`btn fw-bold text-black ${styles.signup}`}>SIGN UP</button>
                </div>
                    <div className={`w-75 text-center mt-xxl-3`}>
                        <p className={`text-white`}>By signing up I agree to Booka’s Terms of Service & Privacy Policy</p>
                    </div>
                    <div>
                        <span className={`text-white`}>Already Have An Account?</span>
                        <a href="#">   Sign In</a>
                    </div>
            </div>
        </div>
    );
};

RegisterForm.propTypes = {
    
};

export default RegisterForm;