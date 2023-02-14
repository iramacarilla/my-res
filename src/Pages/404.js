import React, { useState } from 'react';
import  ostrich  from '../images/ostrich.jpg';
import LinkFurther from '../Component/LinkFurther';

const NotFound404 = () => {
     
    return (
       <div className='container not-found'>
     <img src={ostrich} alt="ostrich"/>
     <div>

            <h2 className='page-title'>Opps! Page not found.</h2>
           
            <LinkFurther text="Back to home" link="/"/>
     </div>
        </div>
    );
};

export default NotFound404;