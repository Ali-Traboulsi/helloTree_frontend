import React from 'react';
import PropTypes from 'prop-types';
import Navbar from "../../components/Navbar/Navbar";
import style1 from "../../assets/Register/Group 633@1X.png";
import style2 from "../../assets/Register/Group 654.png";
import styles from "./Register.module.css";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const Register = props => {
    return (
        <div>
            <Navbar className={styles.navText} filler={`#414042`}/>
            <div>
                <RegisterForm/>
            </div>
            <div>
                <img src={style2} alt="" className={styles.style2}/>
            </div>
            <div>
                <img src={style1} alt="" className={styles.style1}/>
            </div>
        </div>
    );
};



export default Register;