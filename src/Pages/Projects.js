import React, { useState } from 'react';
import Footer from '../Component/Footer';
import ProjectItem from '../Component/ProjectItem';
import LinkFurther from '../Component/LinkFurther';
import {data} from "../Data/projectsData"

const Projects = () => {
     
    return (
        <div className='container projects'>
            <h2 className='page-title'>Projects.</h2>
           
            <ul className='projects-list' >
               {data.map(item=>(
                    <ProjectItem key={item.id} {...item}/>
                ))}

                
            </ul>
            <LinkFurther text ="Let go to my Resume" link = "/cv"/>
            <Footer/>
        </div>
    );
};

export default Projects;
/*   {projectsData.map(item=>(
                    <ProjectItem key={item.id} {...item}/>
                ))}*/

                /*{projectsData.map(item=>(
                    <li data-id={item.id} key={item.id} onClick={()=>onHandelModal(item)} className='projects-list__item'>
                            <img src={item.img}/>
                            <div className='project-description'>
                                <h6>{item.name}</h6>
                                <p>{item.description}</p>
                                <ul className='project-description__list'>
                                    {item.stack.map(el=>(
                                        <li>{el}</li>
                                    ))}
                                </ul>
                                {openModal && <Modal name={item.id}/>}
                            </div>
                        </li>
                      ))}*/