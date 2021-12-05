import React from 'react';
import PropTypes from 'prop-types';
import styles from "./hero.module.css";

const Hero = props => {
    return (
        <div className={`text-center d-block ${styles.constainer}`} >
            <div className={`mx-auto fs-1 p-3 text-white ${styles.title}`}>FIND YOUR SPACE</div>
            <div className={`mx-auto text-white ${styles.subtitle}`} >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero
            </div>

            <div className={`mx-auto d-flex flex-row justify-content-between ${styles.hero_container}`}>
                <div className={`d-flex flex-row bd-highlight align-items-center mx-4 w-75 ${styles.boxContainer}`}>
                    <div className={`bd-highlight mx-2 bg-white ${styles.boxElement}`}><input type="text" className={`input-group bg-white ${styles.heroInput}`} placeholder={`What ARE YOU PLANNING?`}/></div>
                    <div className={`bd-highlight mx-2 bg-white ${styles.boxElement} ${styles.secondBox}`}><input type="text" className={`input-group bg-white ${styles.heroInput}`} placeholder={`WHERE?`}/></div>
                    <div className={`bd-highlight mx-2 bg-white ${styles.boxElement} ${styles.secondBox}`}><input type="text" className={`input-group bg-white ${styles.heroInput}`} placeholder={`WHEN?`}/></div>
                </div>
                <div>
                    <button className={`btn fw-bold text-white px-4 mx-4 ${styles.search}`}>SEARCH</button>
                </div>
            </div>
        </div>
    );
};

Hero.propTypes = {};

export default Hero;