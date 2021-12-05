import React from 'react';
import PropTypes from 'prop-types';

const ProfileIcon = props => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="11.25" height="15" viewBox="0 0 11.25 15">
                <g id="fi-rr-user" transform="translate(-3)">
                    <path id="Path_1" data-name="Path 1" d="M9.75,7.5A3.75,3.75,0,1,0,6,3.75,3.75,3.75,0,0,0,9.75,7.5Zm0-6.25a2.5,2.5,0,1,1-2.5,2.5A2.5,2.5,0,0,1,9.75,1.25Z" transform="translate(-1.125 0)" fill="#edb35f"/>
                    <path id="Path_2" data-name="Path 2" d="M8.625,14A5.631,5.631,0,0,0,3,19.625a.625.625,0,1,0,1.25,0,4.375,4.375,0,1,1,8.75,0,.625.625,0,1,0,1.25,0A5.631,5.631,0,0,0,8.625,14Z" transform="translate(0 -5.25)" fill="#edb35f"/>
                </g>
            </svg>
        </div>
    );
};

ProfileIcon.propTypes = {

};

export default ProfileIcon;