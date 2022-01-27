import React from 'react';
import { projects } from './projectdata';
import { Link } from 'react-router-dom';
import '../styling/projects.css';

export const Projects = () => {
    return (
        <>
        <h1 className='project-title'>Projects</h1>
        <div className="project-cards-container">
            {projects.map((project) => (
            <div class="card" style={{width: "18rem"}}>
                <div class="card-body">
                    <h5 class="card-title">{project.title}</h5>
                    <p class="card-text">{project.body}.</p>
                    <Link to={project.group} class="btn " >Join Community</Link>
                </div>
            </div>
            ))}
        </div>
        </>
    )
}

export default Projects

