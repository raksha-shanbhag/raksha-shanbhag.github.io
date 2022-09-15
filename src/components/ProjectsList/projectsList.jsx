import './projectsList.css'
import Project from './Project/project'
import Navbar from '../Navbar/navbar';

const ProjectsList = ({page}) => {
    return (
        <div>
            <Navbar page = {page} />
            <div className='projects'>
                <div className="pl-texts">
                    <h1 className='title'> Projects</h1>
                    <p className='description'>
                        These are my side Projects.
                    </p>
                </div>
                <div className="list">
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    )
}

export default ProjectsList
