import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const {user}=use(AuthContext)
    return (
        <div className='max-w-sm mx-auto my-10'>
            <h1>{user.email}</h1>
        </div>
    );
};

export default Profile;