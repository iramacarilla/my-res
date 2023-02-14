import React, { useState } from 'react';
import  ostrich  from '../images/ostrich.jpg';
import LinkFurther from '../Component/LinkFurther';

const NotFound404 = () => {
     
    return (
       <div className='container not-found'>
     <img src={ostrich} alt="ostrich"/>
     <div>

            <h2 className='page-title'>Opps!</h2>
            <h4 className='mb-6'>We can't seem to find the page you are looking for!</h4>
            <LinkFurther text="Back to home" link="/"/>
     </div>
        </div>
    );
};

export default NotFound404;