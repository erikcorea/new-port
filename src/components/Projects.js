import React from 'react';
import { projects } from './projectdata';
import '../styling/projects.css';
import { SocialIcon } from 'react-social-icons';


const Projects = () => {
    return (
        <>
        <h1 className='project-title'><a href="#" id="projects">PROJECTS</a></h1>
        <div className="project-cards-container">
            {projects.map((project) => (
            <div class="project-card">
                <div class="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}.</p>
                    <div className='project-links'>
                        <div className='link-container'>
                            <div className='github-icon-project'>
                                <SocialIcon url={project.github} />
                            </div>
                            <div className='live-button-container'>
                                <button className='live-button'>LIVE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
        </>
    )
}

export default Projects

