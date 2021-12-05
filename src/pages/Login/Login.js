import React from 'react';
import PropTypes from 'prop-types';
import Navbar from "../../components/Navbar/Navbar";
import styles from "../Login/Login.module.css";
import style2 from "../../assets/Login/left-side-art.png";
import style1 from "../../assets/Login/right-side-art.png";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = props => {
    return (
        <div>
            <Navbar className={styles.navText} filler={`#414042`}/>
            <div>
                <LoginForm/>
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

Login.propTypes = {
    
};

export default Login;