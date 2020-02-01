import React from 'react';
import './index.css';

const User = (props) => {
    const { name } = props.user

    return (
    
        <div className='userClass'>
            <p><img src={props.user.picture.large} alt='User'></img></p>
            <ul>
            <li>User Details</li>
            <li>Name: {name.first} {name.last}</li>
            <li>Email: {props.user.email}</li>
            <li>Cell Number: {props.user.cell}</li>
            </ul>
            
        </div>
    );
};

export default User;