import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LinkFurther from '../Component/LinkFurther';

const NotFound = () => {
     
    return (
        <div className='container projects'>
            <h2 className='page-title'>404.</h2>
            <LinkFurther text="Go to home page" link="/"/>
        </div>
    );
};

export default NotFound;