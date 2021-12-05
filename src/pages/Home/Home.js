import React from 'react';
import PropTypes from 'prop-types';
import Navbar from "../../components/Navbar/Navbar";
import HeroImg from "../../assets/Home/Hero_image.png";
import styles from "./Home.module.css";
import Hero from "../../components/Hero/Hero";

const Home = props => {
    return (
        <div>
            {/*<img className="img-fluid position-absolute overflow-hidden" src={HeroImg} alt=""/>*/}
            <div>
                <div className={`d-flex`}>
                    <div className={`${styles.overlayBlock}`}/>
                    <div className={`position-absolute ${styles.heroImg}`}>
                        <img className={`img-fluid`} src={HeroImg} alt=""/>
                    </div>
                </div>
                <div className={styles.navbar}>
                    <Navbar className={"text-white"} filler={`#fff`}/>
                </div>
                <div className={styles.hero}>
                    <Hero/>
                </div>
            </div>
        </div>

    );
};

Home.propTypes = {};

export default Home;