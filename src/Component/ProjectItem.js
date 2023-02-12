
import React, { useState } from 'react';
import Modal from './Modal';
import { Rings } from 'react-loader-spinner';


const ProjectItem = ({...item}) => {
    const [openModal, setOpenModal] = useState(false);
   // console.log('try1',onMouse);
   const onHandelModal= () => {
    setOpenModal(prev => !prev)
}

    return (
        <>
     
          <li key={item.id} onClick={onHandelModal} className='projects-list__item'>
                    <img src={item.img} loading={"eager"} alt={item.name}/>
                    <div className='project-description'>
                        <h6 className='mb-4'>{item.name}</h6>
                        <p className='mb-2'>{item.short_description}</p>
                        <ul className='project-description__list'>
                            {item.stack.map(el=>(
                                <li>{el}</li>
                                ))}
                        </ul>
                    </div>
                </li>
    {openModal && <Modal item={item} setOpenModal={setOpenModal}/>}
   
        </>
    );
    
};


export default ProjectItem;


