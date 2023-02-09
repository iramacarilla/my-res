
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
      {!item ? <Rings height="30" width="30" color="#000" radius="3" wrapperStyle={{}}  wrapperClass=""  visible={true} ariaLabel="rings-loading"/> 
      :
          <li key={item.id} onClick={onHandelModal} className='projects-list__item'>
                    <img src={item.img}/>
                    <div className='project-description'>
                        <h6>{item.name}</h6>
                        <p>{item.description}</p>
                        <ul className='project-description__list'>
                            {item.stack.map(el=>(
                                <li>{el}</li>
                                ))}
                        </ul>
                    </div>
                </li>
                            }
    {openModal && <Modal item={item} setOpenModal={setOpenModal}/>}
   
        </>
    );
    
};


export default ProjectItem;


