import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

const AboutPage = async () => {
    const session = await getServerSession(authOptions)
    console.log('sesion from about',session);
    return (
        <div>
            This is about page
        </div>
    );
};

export default AboutPage;